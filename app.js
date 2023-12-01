const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");
// creating new schema
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// creating new model

const Fruit = mongoose.model("Fruit", fruitSchema);
 // creating objects

 const Apple = new Fruit (
    {
    id: 1,
    name: "Apple",
    rating: 7,
    review: "tasty fruit"
    }
 );
 const Banana = new Fruit (
    {
        id: 2,
        name: "Banana",
        rating: 5,
        review: "good fruit" 
    }
 );
 const Watermelon = new Fruit (
    {
        id: 3,
        name: "Watermelon",
        rating: 6,
        review: "sweet fruit" 
    }
 );
   
// insert many items to mongoBD
Fruit.insertMany([Apple, Banana, Watermelon])
 .then(function () {
   console.log("Successfully saved defult items to DB");
 })
 .catch(function (err) {
   console.log(err);
 });
 




 // find items from fruit object
Fruit.find().then((fruits) => {
    // close connection to database
    mongoose.connection.close();
    fruits.forEach(function(fruit){
        console.log(fruit.name)
    });
});


