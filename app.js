require('dotenv').config()
require('express-async-errors')
const notFoundMiddleware = require('./middleware/not-found')

const errorHandlerMiddleware = require('./middleware/error-handler')
const mainRouter = require('./routes/route1')
const express = require('express')

const app = express()

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', mainRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000
const start = async () => {
  try {
    // connect db here if require
    // await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ---> ${port}`))
  } catch (error) {
    console.log(erro)
  }
}
start()
