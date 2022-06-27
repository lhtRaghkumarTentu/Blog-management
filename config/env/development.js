module.exports = {
  DB:process.env.DB || 'mongodb+srv://raghuKumar2662:2662@raghu-works.jrqtw.mongodb.net/firstNodeDatabase?retryWrites=true&w=majority',
  PORT: process.env.PORT || '3010',
  IS_CONSOLE_LOG: process.env.IS_CONSOLE_LOG || 'true'
}

