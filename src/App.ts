'use strict'

const express = require('express')

class App {

  public express

  constructor () {
    this.express = express()
    this.routes()
  }

  private routes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)
  }

}

module.exports = new App().express
