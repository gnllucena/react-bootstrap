import axios from 'axios';
import { selector } from 'recoil';
import Filter from '../../../components/models/Filter';
import FilterGroup from '../../../components/models/FilterGroup';
import Pagination from '../../../domain/Pagination';
import Stock from '../../../domain/StockPartial';
import FilterStocksState from '../../atoms/filters/FilterStocksState';

const FilteredStocksSelector = selector<Pagination<Stock>>({
  key: 'FilteredStocksSelector',
  get: async ({ get }) => {
    const filters = get(FilterStocksState);

    let query = '';

    filters.forEach((group: FilterGroup) => {
      group.Filters.forEach((filter: Filter) => {
        query = query + filter.query();  
      });
    })

    const response = await axios.get<Pagination<Stock>>(`${process.env.URL_API_STOCK}stocks?${query}`);

    return response.data;
  }
});

export default FilteredStocksSelector;
