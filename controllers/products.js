const Product = require('../models/product')

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query
  console.log('🚀 ~ file: products.js ~ line 5 ~ getAllProducts ~ sort')
  const queryObject = {}

  if (company) {
    queryObject.company = company
  }

  if (featured) {
    queryObject.featured = featured
  }
  //for searching
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }
  }

  let apiData = Product.find(queryObject)
  if (sort) {
    let sortFix = sort.replace(',', ' ')
    apiData = apiData.sort(sortFix)
  }
  if (select) {
    let selectFix = select.split(',').join(' ')
    apiData = apiData.select(selectFix)
  }

  let page = Number(req.query.page) || 1
  let limit = req.query.limit || 3
  //pagination formula
  let skip = (page - 1) * limit
  if (req.query.limit) {
    apiData = apiData.skip(skip).limit(limit)
  }
  const myData = await apiData
  res.status(200).json({ myData, nbHits: myData.length })
}

const getAllProductstesting = async (req, res) => {
  const myData = await Product.find(req.query)
  res.status(200).json({ myData })
}

module.exports = { getAllProducts, getAllProductstesting }
