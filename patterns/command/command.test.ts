import { User } from "./User";
import { UserUpdateCommand } from "./UserUpdateCommand";

it("should undo command in history", () => {
  const user = new User();
  const infoUser1 = {
    name: "Oleg",
    username: "uok",
  };
  const userUpdateCommand1 = new UserUpdateCommand(user, infoUser1);
  userUpdateCommand1.execute();

  const infoUser2 = {
    name: "Oleg2",
    username: "uok2",
  };
  const userUpdateCommand2 = new UserUpdateCommand(user, infoUser2);
  userUpdateCommand2.execute();

  expect(user.info).toStrictEqual(infoUser2);

  userUpdateCommand2.undo();
  expect(user.info).toStrictEqual(infoUser1);

  userUpdateCommand1.undo();
  expect(user.info).toStrictEqual(undefined);
});
