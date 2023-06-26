FROM node:14.19.1-alpine3.14 as builder
RUN mkdir /ng-app
WORKDIR /ng-app
COPY . .
RUN npm ci
RUN npm run build 

FROM nginx:1.13.3-alpine
COPY config/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /ng-app/dist/ /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]