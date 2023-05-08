const express=require('express')
const router=express.Router();

const {getAllProductstesting,getAllProducts}=require("../controllers/products")
router.route("/").get(getAllProducts)
router.route("/testing").get(getAllProductstesting)

module.exports=router