const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/tawschoolambur").then(e=>{
    console.log("connected to db");
}).then().catch(e=>{
    console.log(e);
});