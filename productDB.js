require("dotenv").config();
const connectDB=require("./db/connect")
const Product=require("./models/product")
const ProductJson=require("./products.json")

const start = async () => {
    try {
      await connectDB(process.env.MONGODB_URL);
      await Product.create(ProductJson)
      console.log("success")
    //   app.listen(PORT, () => {
    //     console.log(`${PORT} Yes I am Connected`)
    //   })
    } catch (error) {
      console.log(error)
    }
  }

  start()