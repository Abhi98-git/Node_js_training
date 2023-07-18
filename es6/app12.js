
class Vacation {

    constructor(destination, length) {
      this.destination = destination;
      this.length = length;
    }

    print() {
      console.log(`${this.destination}: will take ${this.length} days.`);
    }

  }

  const trip = new Vacation("Goa", 9);
  trip.print();

