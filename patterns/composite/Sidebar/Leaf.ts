import { Component } from "./Component";

export class Leaf implements Component {
  constructor(public path: string) {}

  get(path?: string) {
    return {
      path: `${path ? path : ''}/${this.path}`
    };
  }
}
