#!/bin/bash

# Deploy script for TEA Festival API

set -e

echo "🚀 Iniciando deployment da API..."

# Ir para diretório do backend
cd /home/illumina/Projetos/teafestival/backend

# Instalar dependências
echo "📦 Instalando dependências..."
pip install -r requirements.txt

# Criar diretório se não existir
mkdir -p /var/log/teafestival

# Criar arquivo de systemd
echo "⚙️  Criando serviço systemd..."
sudo tee /etc/systemd/system/teafestival-api.service > /dev/null <<EOF
[Unit]
Description=TEA Festival API
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/home/illumina/Projetos/teafestival/backend
ExecStart=/usr/bin/python3 /home/illumina/Projetos/teafestival/backend/main.py
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF

# Recarregar systemd
sudo systemctl daemon-reload

# Iniciar serviço
echo "🟢 Iniciando serviço..."
sudo systemctl enable teafestival-api
sudo systemctl restart teafestival-api

echo "✅ API deployado com sucesso!"
echo "🔗 Acesse: http://localhost:8000/docs"
