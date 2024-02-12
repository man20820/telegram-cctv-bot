# Telegram CCTV Bot
This application is used to take picture of cctv (or any rtsp stream) and send it to telegram group.

# Prerequisite
This application need ffmpeg package

```bash
sudo apt update
sudo apt install ffmpeg -y
```

# Install 

```bash
git clone git@github.com:man20820/telegram-cctv-bot.git
npm install
cp .env.example .env # set your telegram bot token and chat id, also rtsp url
node index.js
```

# Docker
```bash
docker build -t telegram-cctv-bot .
docker run -d --name telegram-cctv-bot \
-e TELEGRAM_BOT_TOKEN="" \
-e TELEGRAM_CHAT_ID="" \
-e RTSP="" \
--restart always \
telegram-cctv-bot
```

# Usage
/matakaki

![alt text](https://github.com/man20820/telegram-cctv-bot/blob/dev/cctv/Screenshots.png?raw=true)