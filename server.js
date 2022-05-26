import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import routes from "./routes/storyTemps.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/story", routes);
app.use("/", (req, res) => {
  res.send("We're requesting the Welcome/Landing Page");
});
const PORT = process.env.PORT || 8080;
/*
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern_youtube', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
})
*/
mongoose.connect(process.env.MDBCONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});
app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
