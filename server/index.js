import express from "express";
import color from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors"
import productRoute from "./routes/productRoutes.js";
import userRoute from "./routes/userRoutes.js";
import { errorListening } from "./middleWares/error.js";

const app = express();
app.use(express.urlencoded({ extended: true })); //body bata server ma data send
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//uncaught excception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`.red);
  console.log(`shutting down the server to handle uncaught exception`);
  process.exit(1);
});

//use env here
dotenv.config();

//connecting database
connectDB();

app.use("/gallery", express.static("public/gallery"));
//
//routing here
app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
//custom error handler
app.use(errorListening);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(
    `server is running at port: http://localhost:${PORT}`.cyan.underline.bold
  );
});

//handled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`.red);
  console.log(`shuttig down the server to handle promise rejection!`);
  server.close(() => {
    process.exit(1);
  });
});
