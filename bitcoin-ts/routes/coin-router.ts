import express, {Request, Response, NextFunction} from 'express' ;
import  Coin  from '../models/coin.model';


const app = express();
const CoinRouter = express.Router();



CoinRouter.route('/').get(function (req: Request, res: Response, next: NextFunction) {  // show all.
  console.log('show all');
   Coin.find(function (err: any, coins: any){
      if(err){
        console.log(err);
      }
      else {
        // res.render('index', {coins: coins});
        res.send({coins: coins})
      }
    });
});


CoinRouter.route('/create').get((req: Request, res: Response, next: NextFunction) => {
    console.log("create coin: view");
   res.render('create');
 });


CoinRouter.route('/post').post(function (req: Request, res: Response, next: NextFunction) {
  console.log("post coin: view");
   const coin = new Coin(req.body);
   console.log(coin);
   coin.save()
     .then((data: any) => {
         console.log("coin data, after saving: ", data);
         res.redirect('/coins');
     })
     .catch(err => {
         res.status(400).send("unable to save to database");
     });
 });



 export default CoinRouter;
    