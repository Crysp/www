FROM node:20-alpine as builder

ENV NODE_ENV production
ENV PATH /usr/src/node_modules/.bin:$PATH

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=production

COPY . .

FROM builder as prod-builder

RUN npm run build

FROM nginx:latest as prod

COPY --from=prod-builder /usr/src/app/out /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
