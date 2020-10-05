abstract class Filter {
  public constructor(params: Partial<Filter>) {
    if (!params.Name) {
      throw new Error('Name must be informed');
    }

    if (!params.Label) {
      throw new Error('Label must be informed');
    }

    this.Name = params.Name;
    this.Label = params.Label
  }

  Name: string;
  Label: string;

  public abstract changed(): boolean;

  public abstract query(): string;

  public abstract match(query: string, value: string): boolean;

  public abstract reset(): void;
}

export default Filter;