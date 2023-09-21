const express = require("express");
const cors = require("cors")
const {connection}= require("./Config/db")
const { userRouter } = require("./Routes/User.Route");
const { oemRouter } = require("./Routes/Oem.Route");
const { MarketPlaceRouter } = require("./Routes/Marketplace_Inventory.Route");
require("dotenv").config()


const app = express()

app.use(express.json())
app.use(cors())
app.use("/users", userRouter);
app.use("/oem",oemRouter)
app.use("/marketplace",MarketPlaceRouter)


app.listen(process.env.port, async () => {
    try {
      await connection;
      console.log("Connected to DB");
    } catch (error) {
      console.log(" Cannot Connected to DB");
      console.log(error);
    }
    console.log("Server is running");
  });