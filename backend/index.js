require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;


const app = express();

app.use(cors());
app.use(bodyParser.json());



app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  });
  
app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  });
app.get("/", (req,res)=>{
    res.send("working fine");
});

  app.use(cookieParser());
  
  app.use(express.json());
  
  app.use("/", authRoute);


app.listen(3002, ()=> {
    mongoose.connect(uri);
    console.log("Database connected successfully!");
    console.log("server listing to the port 3002");

});



