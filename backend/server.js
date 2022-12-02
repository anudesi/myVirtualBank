import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoute from './routes/userRoute.js'
import transactionRoute from "./routes/transactionRoute.js"


const app= express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
dotenv.config();

app.use("/user",userRoute);
app.use("/transaction",transactionRoute);

const PORT = process.env.PORT
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
  
    app.listen(PORT, () => {
      console.log("Backend running at port :", PORT);
    }),
  )
  .catch((err) => console.log(err));
