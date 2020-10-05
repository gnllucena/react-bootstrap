import Filter from "./Filter";

class FilterSlider extends Filter {
  public constructor(params: Partial<FilterSlider>) {
    super(params);

    if (!params.MaxValue) {
      throw new Error('MaxValue must be informed');
    }

    if (!params.MinValue) {
      throw new Error('MinValue must be informed');
    }

    if (!params.Value) {
      throw new Error('Value must be informed');
    }

    if (!params.Initial) {
      throw new Error('Initial must be informed');
    }

    if (params.Range === undefined) {
      throw new Error('Range must be informed');
    }

    if (params.Disabled === undefined) {
      throw new Error('Disabled must be informed');
    }

    this.MaxValue = params.MaxValue;
    this.MinValue = params.MinValue;
    this.Value = params.Value;
    this.Initial = params.Initial;
    this.Range = params.Range;
    this.Disabled = params.Disabled;
  }

  MaxValue: number;
  MinValue: number;
  Value: number | [number, number];
  Initial: number | [number, number];
  Range: boolean;
  Disabled: boolean;

  public changed(): boolean {
    let result = false;

    if (this.Range) {
      const value = this.Value as [number, number];
      const initial = this.Initial as [number, number];

      if (value[0] === initial[0] && value[1] === initial[1]) {
        result = false;
      } else {
        result = true;
      }
    } else if (this.Value === this.Initial) {
      result = false;
    } else {
      result = true;
    }

    return result
  }

  public query(): string {
    let query = '';

    if (this.Range) {
      const value = this.Value as [number, number];
      const initial = this.Initial as [number, number];

      if (value[0] !== initial[0]) {
        query += `from${this.Name}=${value[0]}&`;
      }

      if (value[1] !== initial[1]) {
        query += `to${this.Name}=${value[1]}&`;
      }
    } else {
      if (this.Value !== this.Initial) {
        query += `${this.Name}=${this.Value}&`;
      }
    }

    return query;
  }

  public match(query: string, value: string): boolean {
    if (/^-?\d+$/.test(value) === false) {
      return false;  
    }

    let match = false;

    const parsed = Number(value);
    const name = this.Name.toLowerCase();
    query = query.toLowerCase();

    if (this.Range) {
      let slider = this.Value as [number, number];

      if (query === `from${name}`) {
        slider[0] = parsed;
        match = true;
      } else if (query === `to${name}`) {
        slider[1] = parsed;
        match = true;
      }
    } else {
      let slider = this.Value as number;

      if (query === name) {
        slider = parsed;
        match = true;
      }
    }

    return match;
  }

  public reset(): void {
    this.Value = this.Initial;
  }
}

export default FilterSlider;