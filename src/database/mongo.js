import mongoose from "mongoose";

(async () => {
  try {
    const DB_URI = process.env.DB_URI;
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoAtlas successfully!");
  } catch (err) {
    console.log("Throw err on connection to MongoDB");
    console.log(err);
  }
})();
