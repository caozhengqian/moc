const express = require('express');
const app = express();
app.get('/',function(req,res){
    res.send('<h1>hello wreod</h1>')
})
app.listen(9003,function () {
    console.info('lianjie9003')
})