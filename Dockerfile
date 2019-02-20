FROM alpine
RUN apk add --update nodejs nodejs-npm && mkdir /app
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 8081
CMD [ "npm", "start" ]