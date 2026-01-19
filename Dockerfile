FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules
RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
