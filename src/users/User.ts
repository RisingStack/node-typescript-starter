class User {
  public email: string;
  static findUser(email: string): User {
    const user = new User();
    return user;
  }
}

export default User;
