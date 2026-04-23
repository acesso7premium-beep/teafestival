from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, String, Integer, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel
from datetime import datetime, timedelta
import uuid
import os

# Database setup
DATABASE_URL = "sqlite:///./teafestival.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Models
class Inscricao(Base):
    __tablename__ = "inscricoes"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    nome = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    whatsapp = Column(String)
    eventos = Column(String)  # JSON string com IDs dos eventos
    codigo_referral = Column(String, unique=True, index=True)
    data_inscricao = Column(DateTime, default=datetime.now)
    compartilhamentos = Column(Integer, default=0)

class Compartilhamento(Base):
    __tablename__ = "compartilhamentos"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    codigo_referral = Column(String, index=True)
    data_compartilhamento = Column(DateTime, default=datetime.now)
    origem = Column(String)  # whatsapp, facebook, etc

# Create tables
Base.metadata.create_all(bind=engine)

# Pydantic schemas
class InscricaoCreate(BaseModel):
    nome: str
    email: str
    whatsapp: str
    eventos: list[str]

class InscricaoResponse(BaseModel):
    id: str
    nome: str
    email: str
    whatsapp: str
    eventos: list[str]
    codigo_referral: str
    data_inscricao: datetime
    compartilhamentos: int

    class Config:
        from_attributes = True

class EstatisticasResponse(BaseModel):
    total_inscricoes: int
    total_compartilhamentos: int
    eventos_por_horario: dict
    top_compartilhadores: list

# FastAPI app
app = FastAPI(title="TEA Festival API", version="1.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://teafestival.com.br", "http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Helper functions
def gerar_codigo_referral():
    return f"TEA-{int(datetime.now().timestamp())}-{str(uuid.uuid4())[:8].upper()}"

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# API Endpoints
@app.get("/")
async def root():
    return {"message": "TEA Festival API", "version": "1.0.0"}

@app.post("/api/inscricoes", response_model=InscricaoResponse)
async def criar_inscricao(inscricao: InscricaoCreate, db: Session = next(get_db())):
    """Cria nova inscrição para o festival"""

    # Verificar se email já existe
    db_inscricao = db.query(Inscricao).filter(Inscricao.email == inscricao.email).first()
    if db_inscricao:
        raise HTTPException(status_code=400, detail="Email já registrado")

    # Verificar vagas (400 por evento)
    eventos_str = ",".join(inscricao.eventos)
    codigo_referral = gerar_codigo_referral()

    nova_inscricao = Inscricao(
        nome=inscricao.nome,
        email=inscricao.email,
        whatsapp=inscricao.whatsapp,
        eventos=eventos_str,
        codigo_referral=codigo_referral
    )

    db.add(nova_inscricao)
    db.commit()
    db.refresh(nova_inscricao)

    return InscricaoResponse(
        id=nova_inscricao.id,
        nome=nova_inscricao.nome,
        email=nova_inscricao.email,
        whatsapp=nova_inscricao.whatsapp,
        eventos=nova_inscricao.eventos.split(","),
        codigo_referral=nova_inscricao.codigo_referral,
        data_inscricao=nova_inscricao.data_inscricao,
        compartilhamentos=nova_inscricao.compartilhamentos
    )

@app.get("/api/inscricoes/{codigo_referral}", response_model=InscricaoResponse)
async def obter_inscricao(codigo_referral: str, db: Session = next(get_db())):
    """Obtém detalhes da inscrição pelo código referral"""

    inscricao = db.query(Inscricao).filter(Inscricao.codigo_referral == codigo_referral).first()
    if not inscricao:
        raise HTTPException(status_code=404, detail="Inscrição não encontrada")

    return InscricaoResponse(
        id=inscricao.id,
        nome=inscricao.nome,
        email=inscricao.email,
        whatsapp=inscricao.whatsapp,
        eventos=inscricao.eventos.split(","),
        codigo_referral=inscricao.codigo_referral,
        data_inscricao=inscricao.data_inscricao,
        compartilhamentos=inscricao.compartilhamentos
    )

@app.post("/api/compartilhamentos/{codigo_referral}")
async def registrar_compartilhamento(codigo_referral: str, origem: str = "whatsapp", db: Session = next(get_db())):
    """Registra um compartilhamento e incrementa o contador"""

    inscricao = db.query(Inscricao).filter(Inscricao.codigo_referral == codigo_referral).first()
    if not inscricao:
        raise HTTPException(status_code=404, detail="Inscrição não encontrada")

    # Registrar compartilhamento
    compartilhamento = Compartilhamento(
        codigo_referral=codigo_referral,
        origem=origem
    )
    db.add(compartilhamento)

    # Incrementar contador
    inscricao.compartilhamentos += 1
    db.commit()

    return {"status": "sucesso", "compartilhamentos_total": inscricao.compartilhamentos}

@app.get("/api/estatisticas", response_model=EstatisticasResponse)
async def obter_estatisticas(db: Session = next(get_db())):
    """Retorna estatísticas do festival"""

    total_inscricoes = db.query(Inscricao).count()
    total_compartilhamentos = db.query(Compartilhamento).count()

    # Contar inscritos por evento
    eventos_por_horario = {}
    inscricoes = db.query(Inscricao).all()

    eventos_info = {
        "1": {"hora": "14:50", "titulo": "Abertura do Evento"},
        "2": {"hora": "15:05", "titulo": "Apresentação Comunidade Autista"},
        "3": {"hora": "15:25", "titulo": "Palestra Inclusão & Autismo"},
        "4": {"hora": "15:45", "titulo": "Desfile TEA Festival Luz & Voz"},
        "5": {"hora": "16:05", "titulo": "Música Ao Vivo"},
        "6": {"hora": "16:45", "titulo": "Encerramento"},
    }

    for evento_id, info in eventos_info.items():
        count = sum(1 for i in inscricoes if evento_id in i.eventos.split(","))
        eventos_por_horario[f"{info['hora']} - {info['titulo']}"] = {
            "inscritos": count,
            "vagas_disponiveis": 400 - count
        }

    # Top compartilhadores
    top = db.query(Inscricao).order_by(Inscricao.compartilhamentos.desc()).limit(10).all()
    top_compartilhadores = [
        {"nome": i.nome, "compartilhamentos": i.compartilhamentos, "codigo": i.codigo_referral}
        for i in top
    ]

    return EstatisticasResponse(
        total_inscricoes=total_inscricoes,
        total_compartilhamentos=total_compartilhamentos,
        eventos_por_horario=eventos_por_horario,
        top_compartilhadores=top_compartilhadores
    )

@app.get("/api/saude")
async def verificar_saude():
    """Verifica saúde da API"""
    return {"status": "ok", "timestamp": datetime.now()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
