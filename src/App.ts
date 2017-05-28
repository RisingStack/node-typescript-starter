const path = require('path')
const express = require('express')

class App {

  public express

  constructor() {
    this.express = express()
    this.routes()
  }

  private routes(): void {
    let router = express.Router()
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)
  }

}

module.exports = new App().express
