
const mongoose = require("mongoose");

// Connect to MongoDB
const connectDB = async () => {
  mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
};
const database = mongoose.connection;
database.on("error", (err) => console.error("MongoDB error:", err));
database.on("connected", () => console.log("MongoDB connected"));

module.exports = connectDB;
