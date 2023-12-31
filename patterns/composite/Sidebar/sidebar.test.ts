import { Composite } from "./Composite";
import { Leaf } from "./Leaf";

it("should be equal composite", () => {
  const leaf11 = new Leaf("leaf11");
  const leaf12 = new Leaf("leaf12");
  const leaf13 = new Leaf("leaf13");

  const leaf21 = new Leaf("leaf21");
  const leaf22 = new Leaf("leaf22");
  const composite2 = new Composite("composite2", [leaf21, leaf22]);

  const root = new Composite("root", [leaf11, leaf12, leaf13, composite2]);

  expect(composite2.get()).toStrictEqual({
    path: "composite2",
    children: [
      { path: "/composite2/leaf21" },
      { path: "/composite2/leaf22" },
    ],
  });

  expect(root.get()).toStrictEqual({
    path: "root",
    children: [
      { path: "/root/leaf11" },
      { path: "/root/leaf12" },
      { path: "/root/leaf13" },
      {
        path: "composite2",
        children: [
          { path: "/root/composite2/leaf21" },
          { path: "/root/composite2/leaf22" },
        ],
      },
    ],
  });
});
