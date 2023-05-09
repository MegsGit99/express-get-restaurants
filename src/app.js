const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 
app.use(express.static('public'))

app.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurant.findAll();
})

app.get('restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(id);
    if (restaurant) {
        
    }
})

app.listen(3000, () => {
    console.log(`Server is up and running at http://localhost:3000`);
});



module.exports = app;