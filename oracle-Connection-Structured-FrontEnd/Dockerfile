# Stage 1: Build the Angular application
FROM node:20.11.0 as node

WORKDIR /app

#COPY package.json package-lock.json ./

COPY . .

RUN npm install



#RUN npm run build -- --prod

RUN npm run build --configuration=production

#RUN npm run oracle-Connection-Structured-FrontEnd:build:production

COPY default.conf /etc/nginx/conf.d/default.conf

# Stage 2: Serve the built application with nginx
FROM nginx:alpine

COPY --from=node /app/dist/oracle-connection-structured-front-end /usr/share/nginx/html

EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
