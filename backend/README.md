# TEA Festival Backend API

API FastAPI para gerenciar inscrições, compartilhamentos e estatísticas do TEA Festival.

## Instalação

```bash
cd backend
pip install -r requirements.txt
```

## Execução Local

```bash
python main.py
```

A API estará disponível em `http://localhost:8000`
Documentação interativa: `http://localhost:8000/docs`

## Endpoints

### Criar Inscrição
```
POST /api/inscricoes
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@example.com",
  "whatsapp": "11987654321",
  "eventos": ["1", "2", "3"]
}
```

Response:
```json
{
  "id": "uuid",
  "nome": "João Silva",
  "email": "joao@example.com",
  "whatsapp": "11987654321",
  "eventos": ["1", "2", "3"],
  "codigo_referral": "TEA-1234567890-ABC123XYZ",
  "data_inscricao": "2026-04-23T19:00:00",
  "compartilhamentos": 0
}
```

### Obter Inscrição
```
GET /api/inscricoes/{codigo_referral}
```

### Registrar Compartilhamento
```
POST /api/compartilhamentos/{codigo_referral}?origem=whatsapp
```

### Obter Estatísticas
```
GET /api/estatisticas
```

Response:
```json
{
  "total_inscricoes": 150,
  "total_compartilhamentos": 45,
  "eventos_por_horario": {
    "14:50 - Abertura do Evento": {
      "inscritos": 120,
      "vagas_disponiveis": 280
    }
  },
  "top_compartilhadores": [
    {
      "nome": "Maria Silva",
      "compartilhamentos": 5,
      "codigo": "TEA-xxx"
    }
  ]
}
```

## Deployment

Para rodar em produção:

```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 main:app
```

Ou com systemd:

```bash
sudo nano /etc/systemd/system/teafestival-api.service
```

```ini
[Unit]
Description=TEA Festival API
After=network.target

[Service]
Type=notify
User=www-data
WorkingDirectory=/home/illumina/Projetos/teafestival/backend
ExecStart=/usr/bin/python3 main.py
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable teafestival-api
sudo systemctl start teafestival-api
```

## Banco de Dados

SQLite em `teafestival.db` (criado automaticamente)

Tabelas:
- `inscricoes`: Dados das inscrições
- `compartilhamentos`: Histórico de compartilhamentos
