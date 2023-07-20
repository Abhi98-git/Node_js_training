import  mongoose  from 'mongoose';

const Schema = mongoose.Schema;

const Coin = new Schema({
  name: {
    type: String
  },
  price: {
     type: Number
  }
},{
    collection: 'coins'
});

export default mongoose.model('Coin', Coin);