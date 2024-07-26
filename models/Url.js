const mongoose = require("mongoose");
const shortid = require("shortid");

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, default: shortid.generate },
  createdAt: { type: Date, default: Date.now },
  clickCount: {type: Number,default: 0,},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Link to User schema
});

module.exports = mongoose.model("Url", urlSchema);
