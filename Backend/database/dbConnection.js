import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.DB, {
      dbName: "jOB_SEEKER",
    })
    .then(() => {
      console.log("Lets Connect to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
