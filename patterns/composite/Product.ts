import { Component } from "./Component";

export class Product implements Component {
  constructor(private name: string, private price: number) {}

  getPrice(): number {
    return this.price;
  }
}
