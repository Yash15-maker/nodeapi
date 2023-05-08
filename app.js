require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require('./db/connect')

const product_routes = require('./routes/products')

app.get('/', (req, res) => {
  res.send(
    'Hii Server is live Please acces all the data thorugh 1.>just give api/products/ for all the data 2.>api/products/?sort=by name,price anything u want just put-before parameeter 3.>You can use select just api/products/?select=name like this  4.>You can directly search over name and company also api/products/?name=iphone types....  Just amaxzing😎 '
  )
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

start()
