# 🎯 Talent Register API

API para gerenciamento de talentos e pagamentos.

---

## 🚀 Como Rodar

### Pré-requisitos
- Docker Desktop instalado e rodando
- Node.js 18+

### Passos

1. **Inicie o banco de dados:**
```bash
docker-compose up -d
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Rode a aplicação:**
```bash
npm run start
```

### Acessar

- 🌐 **API:** http://localhost:3000
- 📚 **Swagger:** http://localhost:3000/api
- 🗄️ **PHPMyAdmin:** http://localhost:8080 (usuário: `root`, senha: `root123`)

---

## 🛑 Parar

```bash
# Parar aplicação: Ctrl+C

# Parar banco de dados:
docker-compose down
```

---

## 📊 Endpoints

- **Talents:** `/talents`
- **Payments:** `/payments`

Veja todos no Swagger: http://localhost:3000/api

---

## 🛠️ Tecnologias

NestJS • TypeORM • MySQL • Docker • Swagger