const express = require('express')
const app = express();
app.get('/',(req, res)=>{
res.send("Hi Stranger");
})
app.listen(3002)
