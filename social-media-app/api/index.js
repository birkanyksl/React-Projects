const express = require("express");
const cors = require("cors");
const app = express(); // app nesnesini oluştur

// CORS middleware'ini tanımla
app.use(cors());

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to MongoDB");
});

// middleware'leri ekle
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// rotaları tanımla
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

// server'ı dinle
app.listen(8800, () => {
  console.log("backend server İs running");
});
