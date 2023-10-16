import mongoose from "mongoose";

const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.DB_URl);
  console.log(
    `mongodb is  connected at :${connection.host}`.cyan.underline.bold
  );
};
export default connectDB;
