import express from "express";
import mongoose from "mongoose";
import Product from "./Product.js";

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017");
const db= mongoose.connection;

db.on("open",(req,res)=>{
console.log("connection established");

});

db.on("close",(req,res)=>{
    console.log("connection is closed");
});


const data = [
  {
    name: "Samsung Crystal 4K Vivid",
    price: 42990,
    description:
      "The Samsung Crystal UHD Smart TV has an array of features for an exceptional theatre-like experience in the comfort of your home. You can see your favourite stars come to life on this TV, thanks to the PurColour featured in it. ",
    stockQuantity: 5,
  },

  {
    name: "vivo T4x 5G",
    price: 13999,
    description:
      "Go All Day , Every Day with no limits with vivo T4x 5G. The 6500 mAh battery and 44W FlashCharge deliver all-day energy, quick recharges, and smart efficiency for nonstop use.",
    stockQuantity: 1000,
  },
];

Product.deleteMany({});

Product.countDocuments()
.then((count)=>{
if(count===0){

    return insertMany((data)=>console.log("data: ",data));
}
else{
          console.log("Data already exists. Skipping insertion.");

})
.then((result)=>{


})

})


app.listen(3000, (req, res) => {
  console.log("Server is running");
});
