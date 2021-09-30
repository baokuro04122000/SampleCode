import mongoose from 'mongoose';
import bluebird from 'bluebird';
const connectDB = () =>{
    mongoose.Promise = bluebird;
    mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false 
});
}
export default connectDB;