class Item {
  super({ title, min, max }) {
    this.title = title;
    this.amount = String;
    this.price = Number;
    this.min = min;
    this.max = max;
    this.calcPrice();
  }
  calcPrice() {
    this.price = min + Math.floor(Math.random() * (max - min));
  }
}

export default Item;
