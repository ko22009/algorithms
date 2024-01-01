export type UserInfo = {
  name: string;
  username: string;
};

export class User {
  info: UserInfo;

  update(userInfo: UserInfo) {
    this.info = userInfo;
  }
}
