# 🎬 CRG Movies

## Sobre o projeto

**CRG Movies** é um projeto fullstack desenvolvido com **Spring Boot** no backend e **ReactJS** no frontend. A aplicação exibe um catálogo de filmes com suporte a múltiplas categorias, como **Drama**, **Romance**, **Anime**, **Ação**, **Ficção Científica**, **Horror** e **Aventura**.

Os dados são fornecidos por uma API REST desenvolvida no backend e consumidos pelo frontend via Axios. Para persistência, o projeto utiliza banco de dados **H2** em ambiente de testes e **MariaDB** em produção, com o banco rodando em container Docker.

---

## 📱 Layout responsivo da página inicial
![CRG Movies - Home](https://github.com/cauerg44/pictures/blob/main/images/image.png)  
![CRG Movies - Home - Mobile](https://github.com/cauerg44/pictures/blob/main/images/crg-movies-home-mobile.png)

## 🎞️ Layout responsivo da página de coleções de gêneros de filmes
![CRG Movies - Collection](https://github.com/cauerg44/pictures/blob/main/crg-movies-collection.png)  
![CRG Movies - Collection - Mobile2](https://github.com/cauerg44/pictures/blob/main/crg-movies-collection-mobile-2.png)  
![CRG Movies - Collection - Mobile](https://github.com/cauerg44/pictures/blob/main/crg-movies-collection-mobile.png)

## 🎬 Layout responsivo do card de filme
![CRG Movies - Card Movie - Mobile2](https://github.com/cauerg44/pictures/blob/main/crg-movie-card-movie-mobile-2.png)  
![CRG Movies - Card Movie - Mobile](https://github.com/cauerg44/pictures/blob/main/crg-movies-card-movie-mobile.png)

---

## 🚀 Como executar o projeto

### Pré-requisitos

- Java 17+
- Node.js 20+
- Docker

### 🐳 Subindo o banco de dados com Docker

```bash
docker run -d --name mariadb_crg \
  -e MARIADB_ROOT_PASSWORD=mariadbcrg123 \
  -e MARIADB_DATABASE=db_collection \
  -p 3306:3306 mariadb:10.11
```

### ▶️ Como executar o backend - Spring Boot

### Acesse a pasta do backend
```bash
cd crg-movies-backend
```

### Execute o projeto (via IDE ou terminal)

```bash
./mvnw spring-boot:run
```

### ▶️ Como executar o frontend - ReactJS

### Acesse a pasta do backend
```bash
# Acesse a pasta do frontend
cd crg-movies-frontend

# Instale as dependências
yarn

# Rode o projeto
yarn dev
```

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- H2 database
- JPA / Hibernate
- MariaDB
- Docker (para conteinerização do banco de dados)

 ## Front end
- HTML / CSS / Typescript
- ReactJS
- Axios

# Desenvolvedor

Cauê da Rocha Garcia : https://www.linkedin.com/in/cauegarcia8112004
