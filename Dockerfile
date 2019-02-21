FROM alpine
RUN apk add --update nodejs nodejs-npm yarn && mkdir /app
COPY . /app
WORKDIR /app
RUN npm install && npm run build:client && npm run migrate
EXPOSE 8081
ENV PORT=3001
CMD [ "npm", "start" ]