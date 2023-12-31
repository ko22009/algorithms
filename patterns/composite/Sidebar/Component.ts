type Element = {
  path: string;
  children?: Element[];
};

export interface Component {
  get(path?: string): Element;
}
