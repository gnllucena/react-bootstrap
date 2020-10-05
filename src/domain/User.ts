class User {
  public constructor(params: User = {} as User) {
    this.Id = params.Id;
    this.Name = params.Name;
    this.Email = params.Email;
    this.RememberMe = params.RememberMe;
    this.Bearer = params.Bearer;
    this.Avatar = params.Avatar;
  }

  Id: number | undefined;
  Name: string;
  Email: string;
  RememberMe: boolean;
  Bearer: string;
  Avatar: string;
}

export default User;