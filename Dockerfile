# Use uma imagem base do Nginx
FROM nginx:latest

# Remova o arquivo de configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copie o arquivo de configuração personalizado do Nginx para dentro do contêiner
COPY nginx.conf /etc/nginx/conf.d/

# Copie os arquivos estáticos do seu site para dentro do contêiner
COPY . /usr/share/nginx/html

# Exponha a porta 80 do contêiner
EXPOSE 80

# Comando para iniciar o servidor Nginx quando o contêiner for iniciado
CMD ["nginx", "-g", "daemon off;"]
