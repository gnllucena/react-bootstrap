export default class User {
  public constructor(params: Partial<User>) {
    this.Id = params.Id;
    this.Name = params.Name ?? "";
    this.Email = params.Email ?? "";
    this.RememberMe = params.RememberMe ?? false;
    this.Bearer = params.Bearer ?? "";
    this.Avatar = params.Avatar ?? "";
  }

  Id: number | undefined;
  Name: string;
  Email: string;
  RememberMe: boolean;
  Bearer: string;
  Avatar: string;
}