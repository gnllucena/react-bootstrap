import Filter from "./Filter";

export default class FilterGroup {
  public constructor(params: Partial<FilterGroup>) {
    if (!params.Name) {
      throw new Error('Name must be informed');
    }

    if (!params.Filters || params.Filters.length < 1) {
      throw new Error('Filters must be informed');
    }

    this.Name = params.Name;
    this.Filters = params.Filters;
  }

  Name: string;
  Filters: Array<Filter>;
}
