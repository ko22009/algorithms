import { Component } from "./Component";

export class Box implements Component {
  private items: Component[] = [];

  constructor(private name: string, private packagingCost: number) {}

  addItem(item: Component) {
    this.items.push(item);
  }
  removeItem(item: Component) {
    this.items = this.items.filter((i) => i !== item);
  }

  getPrice(): number {
    return (
      this.packagingCost +
      this.items.reduce((acc, item) => acc + item.getPrice(), 0)
    );
  }
}
