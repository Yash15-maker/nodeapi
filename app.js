require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require('./db/connect')
const path = require('path');


const product_routes = require('./routes/products')

app.get('/', (req, res) => {
  res.sendFile(path.resolve('details.html'));
})
//middleware to setports
app.use('/api/products', product_routes)

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL)
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am Connected`)
    })
  } catch (error) {
    console.log(error)
  }
}

start();
