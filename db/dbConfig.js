const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster.miktmdg.mongodb.net/?retryWrites=true&w=majority`).then(response=>{
    console.log("Successfuly Connected To MongoDB");
}).catch(error=>{
    console.log("MongoDB Not Connected");
})
