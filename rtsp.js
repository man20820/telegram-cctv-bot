require('dotenv').config()
const Recorder = require('node-rtsp-recorder').Recorder

const getCapture = new Recorder({
  url: process.env.RTSP,
  folder: 'cctv',
  name: 'cam1',
  type: 'image',
  fileNameFormat: 'YYYYMMDDhhmmss'
})

module.exports = {
  getCapture
}