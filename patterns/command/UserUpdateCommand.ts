import { Command } from "./Command";
import { User, UserInfo } from "./User";

export class UserUpdateCommand implements Command {
  oldUserInfo: UserInfo;

  constructor(private user: User, private userInfo: UserInfo) {}

  execute() {
    this.oldUserInfo = this.user.info;
    this.user.update(this.userInfo);
  }

  undo() {
    this.user.update(this.oldUserInfo);
  }
}
