export class Stock  {
  public constructor(init?: Partial<Stock>) {
    Object.assign(this, init);
  }
 
  Id?: number;
}