export interface Component {
  get(path?: string): {
    path: string;
  };
}
