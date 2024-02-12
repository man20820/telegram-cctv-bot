FROM node:18
RUN apt update
RUN apt install ffmpeg -y

WORKDIR /usr/src/app
COPY . .
RUN npm install --prod
EXPOSE 3000
CMD [ "node", "./index.js" ]