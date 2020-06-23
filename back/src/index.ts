import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  res.send("home");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
