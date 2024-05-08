import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.DB, {
      dbName: "jOB_SEEKER",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};