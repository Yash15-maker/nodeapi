const mongoose=require("mongoose")


// const uri="mongodb+srv://mishrayash:uMZn4XIs2DW4y4oA@newapi.8pviytr.mongodb.net/Newapi?retryWrites=true&w=majority"
const connectDB=(uri)=>{
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports=connectDB;