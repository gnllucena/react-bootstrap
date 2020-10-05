import Filter from "./Filter";

class FilterGroup {
  public constructor(params: FilterGroup = {} as FilterGroup) {
    this.Name = params.Name;
    this.Filters = params.Filters;
  }

  Name: string;
  Filters: Array<Filter>;
}

export default FilterGroup;