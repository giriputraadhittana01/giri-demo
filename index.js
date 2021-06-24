var express = require('express');
var app = express();
var products = require('./products.json');

app.get('/',(req,res) => {
    res.send('Hello Panda Boba Enak');
})
app.get('/product/getAll',(req,res) => {
    res.json(products);
})
app.get('/product/id/:id',(req,res) => {
    const product = products.find((item) => item.id == req.params.id);
    res.json(product);
})

app.use('*',(req, res) => {
    res.status(404).json({error : 'Not Found'});
});

const PORT = 5000;
app.listen(PORT,() => {
    console.log(`Listening to ${PORT}`);
})