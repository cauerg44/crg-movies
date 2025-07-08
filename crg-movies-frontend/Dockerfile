# Etapa 1: Build da aplicação React com Yarn e Node 22 Debian
FROM node:22-bullseye AS build
WORKDIR /app

# Copia arquivos de dependência
COPY package.json yarn.lock ./

# Instala dependências
RUN yarn install

# Passa a variável de ambiente para o build
ARG VITE_REACT_APP_API_URL=http://localhost:8080
ENV VITE_REACT_APP_API_URL=$VITE_REACT_APP_API_URL

# Copia o restante do código
COPY . .

# Executa o build do React
RUN yarn build

# Etapa 2: Serve a aplicação estática com Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]