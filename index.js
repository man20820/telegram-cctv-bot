require('dotenv').config()
const { Telegraf, Input } = require('telegraf')
const { message } = require('telegraf/filters')
const { getCapture } = require('./rtsp')
const fs = require('fs')

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

const getCaptureFileName = async () => {
  try {
    await getCapture.captureImage(() => {
      const ffmpegCommand = getCapture.writeStream.spawnargs
      const fileName = ffmpegCommand.slice(-1).toString()
      console.log(fileName)
      if (fs.existsSync(fileName)) {
        bot.telegram.sendPhoto(process.env.TELEGRAM_CHAT_ID, { source: fileName })
      } else {
        bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, 'sabar gan...')
      }
    })
  } catch (err) {
    console.error(err)
  }
}

  ;(async () => {
  const matakaki = async (ctx) => {
    try {
      await getCaptureFileName()
    } catch (err) {
      console.error(err)
    }
  }
  bot.command('matakaki', matakaki)
  bot.launch()
})()
