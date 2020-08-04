export class User  {
  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
 
  Id?: number;
}