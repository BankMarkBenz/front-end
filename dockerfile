# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
ADD frontend-production.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html/frontend/
EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
