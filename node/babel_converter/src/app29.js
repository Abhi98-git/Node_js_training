


const EventEmitter = require('events');

class Stock extends EventEmitter {
    constructor(symbol, price) {
        super();
        this._symbol = symbol;
        this._price = price;
    }
    
    set price(newPrice) {
        if (newPrice !== this._price) {
            this.emit('PriceChanged', {
                symbol: this._symbol,
                oldPrice: this._price,
                newPrice: newPrice,
                adjustment: ((newPrice - this._price) * 100 / this._price).toFixed(2)
            });
        }
    }
    get price() {
        return this._price;
    }
    get symbol() {
        return this._symbol;
    }
}



const stock = new Stock('RIL', 2300);

stock.on('PriceChanged', (arg) => {
    console.log(`The price of the stock ${arg.symbol} has changed ${arg.adjustment}%`);
})

stock.price = 2433;