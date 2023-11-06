FROM nginx:1.25.2-alpine3.18-slim

WORKDIR /usr/share/nginx/html

RUN rm /usr/share/nginx/html/*
COPY ./out .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]