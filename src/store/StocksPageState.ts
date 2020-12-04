import axios from 'axios';
import { atom, selector } from "recoil";
import Filter from "../components/models/Filter";
import FilterCheckbox from '../components/models/FilterCheckbox';
import FilterGroup from "../components/models/FilterGroup";
import FilterSlider from '../components/models/FilterSlider';
import Pagination from "../domain/Pagination";
import StockPartial from "../domain/StockPartial";

export const StocksPageFilterState = atom<Array<FilterGroup>>({
  key: 'StocksPageFilterState',
  dangerouslyAllowMutability: true,
  default: new Array<FilterGroup>(
    new FilterGroup({
      Name: 'Valuation',
      Filters: new Array<Filter>(
        new FilterSlider({
          Name: 'PE',
          Label: 'Price to Earnings Ratio',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'PB',
          Label: 'Price to Book Ratio',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'PC',
          Label: 'Price to Cash Flow Ratio',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'PS',
          Label: 'Price to Sales Ratio',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'ES',
          Label: 'Earnings per Share',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'EVEBITDA',
          Label: 'EV/EBITDA',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'EVEBIT',
          Label: 'EV/EBIT',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'EVFCF',
          Label: 'EV/FCF',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'EVSales',
          Label: 'EV/Sales',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'PriceNETWorkingCapital',
          Label: 'Price to NET Working Capital',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'PriceFreeCashFlow',
          Label: 'Price to Free Cash Flow',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        })
      )
    }),
    new FilterGroup({
      Name: 'Profitability',
      Filters: new Array<Filter>(
        new FilterSlider({
          Name: 'ROE',
          Label: 'ROE',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'ROIC',
          Label: 'ROIC',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'ROA',
          Label: 'ROA',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        })
      )
    }),
    new FilterGroup({
      Name: 'Margins',
      Filters: new Array<Filter>(
        new FilterSlider({
          Name: 'NETMargin',
          Label: 'NET Margin',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'EBITMargin',
          Label: 'EBIT Margin',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'EBITDAMargin',
          Label: 'EBITDA Margin',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'GrossMargin',
          Label: 'Gross Margin',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'ProfitMargin',
          Label: 'Profit Margin',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'OperatingProfitMargin',
          Label: 'Operating Profit Margin',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
      ),
    }),
    new FilterGroup({
      Name: 'Indebtedness',
      Filters: new Array<Filter>(
        new FilterSlider({
          Name: 'NETDebtEBITDARatio',
          Label: 'NET Debt to EBITDA Ratio',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'NETDebtEBITRatio',
          Label: 'NET Debt to EBIT Ratio',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'DebtEquityRatio',
          Label: 'Debt to Equity Ratio (D/E)',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'ShareholderEquityRatio',
          Label: 'Shareholder Equity Ratio',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        })
      )
    }),
    new FilterGroup({
      Name: 'Growth',
      Filters: new Array<Filter>(
        new FilterSlider({
          Name: 'CompondAnnualGrowth1Years',
          Label: 'CAGR - 1 Year',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'CompondAnnualGrowth3Years',
          Label: 'CAGR - 3 Years',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'CompondAnnualGrowth5Years',
          Label: 'CAGR - 5 Years',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'AvarageAnnualGrowth5Years',
          Label: 'Average Annual Growth Rate',
          MaxValue: 200,
          MinValue: 0,
          Value: [0, 200],
          Initial: [0, 200],
          Range: true,
          Disabled: false
        })
      )
    }),
    new FilterGroup({
      Name: 'Sectors',
      Filters: new Array<Filter>(
        new FilterCheckbox({
          Name: 'CommercialServices',
          Label: 'Commercial Services',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'Communications',
          Label: 'Communications',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'ConsumerDurables',
          Label: 'Consumer Durables',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'ConsumerServices',
          Label: 'Consumer Services',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'ConsumerNonDurables',
          Label: 'Consumer Non-Durables',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'DistributionServices',
          Label: 'Distribution Services',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'ElectronicTechnology',
          Label: 'Electronic Technology',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'EnergyMinerals',
          Label: 'Energy Minerals',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'Finance',
          Label: 'Finance',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'HealthServices',
          Label: 'Health Services',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'HealthTechnology',
          Label: 'Health Technology',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'IndustrialServices',
          Label: 'Industrial Services',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'Miscellaneous',
          Label: 'Miscellaneous',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'NonEnergyMinerals',
          Label: 'Non-Energy Minerals',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'ProcessIndustries',
          Label: 'Process Industries',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'ProducerManufacturing',
          Label: 'Producer Manufacturing',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'RetailTrade',
          Label: 'Retail Trade',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'TechnologyServices',
          Label: 'Technology Services',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'Transportation',
          Label: 'Transportation',
          Value: false,
          Initial: false,
          Disabled: false
        }),
        new FilterCheckbox({
          Name: 'Utilities',
          Label: 'Utilities',
          Value: false,
          Initial: false,
          Disabled: false
        })
      )
    })
  )
});

export const StocksPagePaginationState = atom<Pagination<StockPartial>>({
  key: 'StocksPagePaginationState',
  dangerouslyAllowMutability: true,
  default: new Pagination<StockPartial>({
    Items: new Array<StockPartial>(),
    Limit: 12,
    Offset: 0,
    Total: 100
  })
});

export const StocksPageFilteredSelector = selector<Pagination<StockPartial>>({
  key: 'StocksPageFilteredSelector',
  get: async ({ get }) => {
    const filters = get(StocksPageFilterState);
    const pagination = get(StocksPagePaginationState);

    let query = '';

    filters.forEach((group: FilterGroup) => {
      group.Filters.forEach((filter: Filter) => {
        query = query + filter.query();  
      });
    })

    const response = await axios.get<Pagination<StockPartial>>(`${process.env.URL_API_STOCK}stocks?offset=${pagination.Offset}&limit=${pagination.Limit}&${query}`);

    return response.data;
  }
});