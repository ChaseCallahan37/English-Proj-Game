import { v4 as uuidv4 } from "uuid";

class Item {
  constructor({ title, min, max, amount }) {
    this.id = uuidv4();
    this.title = title;
    this.amount = amount ? amount : 1;
    this.price = Number;
    this.min = min;
    this.max = max;
    this.calcPrice();
  }
  calcPrice() {
    this.price = this.min + Math.floor(Math.random() * (this.max - this.min));
  }
}

export default Item;
