import Filter from "./Filter";

export default class FilterCheckbox extends Filter {
  public constructor(params: Partial<FilterCheckbox>) {
    super(params);

    if (params.Value === undefined) {
      throw new Error('Value must be informed');
    }

    if (params.Initial === undefined) {
      throw new Error('Initial must be informed');
    }

    if (params.Disabled === undefined) {
      throw new Error('Disabled must be informed');
    }

    this.Value = params.Value
    this.Initial = params.Initial;
    this.Disabled = params.Disabled;
  }

  Value: boolean;
  Initial: boolean;
  Disabled: boolean;

  public changed(): boolean {
    if (this.Value === this.Initial) {
      return false;
    } else {
      return true;
    }
  }

  public query(): string {
    let query = '';

    if (this.Initial !== this.Value) {
      query += `${this.Name}=${this.Value}&`; 
    }

    return query;
  }

  public match(query: string, value: string): boolean {
    if (value !== 'true') {
      return false;
    }

    let match = false;

    if (query.toLowerCase() === this.Name.toLowerCase()) {
      match = true;

      this.Value = true;
    }

    return match;
  }

  public reset(): void {
    this.Value = this.Initial;
  }
}
