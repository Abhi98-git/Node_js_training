abstract class Product {
  name!: string;
  unitPrice!: number;
}

class Food extends Product {
  constructor(public bestBefore: Date) {
    super();
  }
}

const bread = new Food(new Date(2022, 6, 1));
console.log(bread) ;

