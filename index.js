const express = require('express')
const app = express();
console.log("Hello world")
app.get('/',(req, res)=>{
res.send("Hi Stranger");
})
app.listen(8080)
