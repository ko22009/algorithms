import { Component } from "./Component";

export class Composite implements Component {
  children: Array<Component> = [];

  constructor(public path, component: Array<Component>) {
    this.children = component;
  }

  get(path?: string) {
    return {
      path: this.path,
      children: this.children.map((el) =>
        el.get(`${path ? path : ""}/${this.path}`)
      ),
    };
  }
}
