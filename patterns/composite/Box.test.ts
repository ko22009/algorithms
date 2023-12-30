import { Box } from "./Box";
import { Product } from "./Product";

it("should be return 116", () => {
  const smallProduct = new Product("Small Product", 10);
  const smallBox = new Box("Small Box", 1);

  smallBox.addItem(smallProduct);

  const bigProduct = new Product("Big Product", 100);
  const bigBox = new Box("Big Box", 5);

  bigBox.addItem(bigProduct);
  bigBox.addItem(smallBox);

  expect(bigBox.getPrice()).toBe(116);
});
