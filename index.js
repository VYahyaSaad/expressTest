const express  = require('express')
const app = express()
const path = require("path")
const User = require("./model/UserSchema")
require("./db")
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"))
})

app.get('/me',(req,res)=>{
    res.send("Masha allah")
})

app.get("/add",async(req,res)=>{
  const { name, email } = req.query;
  try {
    const add = await User.create({ name, email });
    console.log(add);
    if (add) {
      res.json({ msg: "Added" });
    } else {
      res.json({ msg: "SMO" });
    }
  } catch (error) {
    res.json({ msg: "SMO" });
  }
})

app.listen(5000)