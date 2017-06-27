export const socketConf=  process.env.NODE_ENV === 'production'
?'ws://211.253.27.204/chejudo-web/api/custService.ws'
:'ws://211.253.27.204/chejudo-web/api/custService.ws'
