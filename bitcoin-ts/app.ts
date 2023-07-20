import  express  from 'express' ;
import  mongoose from 'mongoose';
import  path  from  'path' ;
import  CoinRouter from './routes/coin-router';



const app = express();
const port = 3000;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/mydb01', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
          .catch(err => console.log("Mongo conn. ERR: ", err));




app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/coins', CoinRouter);

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.listen(port, function(){
  console.log('Express @ coins: ', port);
});