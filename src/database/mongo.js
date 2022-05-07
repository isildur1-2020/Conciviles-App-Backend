import mongoose from "mongoose";

(() => {
  try {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoAtlas successfully!");
  } catch (err) {
    throw new Error("Error on connection to MongoAtlas.", err);
  }
})();
