const express = require('express');
const bodyParser = require ('body-parser');

const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodeJS',{useNewUrlParser: true}).then(()=>{
      console.log('Connexion établie avec succès')
});
const db = mongoose.connection;

const Product = require('./model/product');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); //permet de capter les données ennvoyées en POST



//pas de point . devant le slash dans l'adresse car on donne un url pas un chemin sur le PC
app.get('/product', (request, response)=> {
 Product.find().then((products)=>{
       response.send(products);
 });
});

app.post('/product', (request, response) => {

    let product = new Product({
        name: request.body.name,
        price: request.body.price
    });
    product.save().then(() =>{

        response.statusCode = 201;
        response.send({"message":"Created"});
    });
});



app.put('/product/:id', (request, response)=>{
        Product.findByIdAndUpdate(request.params.id, request.body).then(()=>{
            response.statusCode=204;
            response.send({"message" : "No content"});
        });
    });



app.delete('/product/:id', (request, response) => {
    Product.findByIdAndRemove(request.params.id).then(()=>{
        response.statusCode=204;
        response.send({"message" : "No content"});
    });
});



app.listen(3200, ()=> {
      console.log("api server listenning at http://localhost:3200");
});
