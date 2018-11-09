require('dotenv').load({ silent: true })
import express from 'express'
import { HOST, PORT } from './constants'

const app = express()

app
  .disable('x-powered-by')
  .use(express.json())
  .use(
    express.urlencoded({
      extended: true
    })
  )
  .listen(PORT, () => {
    console.log(`Listenin on ${HOST}:${PORT}`)
  })

export default app
