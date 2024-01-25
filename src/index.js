const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TaskRouter = require("./routes/task");

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

const customCorsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = process.env.ORIGIN_URL.split(" ");
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Request from unauthorized origin"));
    }
  },
};

app.use(cors(customCorsOptions));
app.use(express.json({ extended: true }));
app.use("/api", TaskRouter);

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Server error", err.message);
  });

app.get("/", (req, res) => {
  res.send("Welcome to the tasks api");
});
