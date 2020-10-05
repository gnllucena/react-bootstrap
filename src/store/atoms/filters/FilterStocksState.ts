import { atom } from "recoil";
import Filter from "../../../components/models/Filter";
import FilterCheckbox from "../../../components/models/FilterCheckbox";
import FilterGroup from "../../../components/models/FilterGroup";
import FilterSlider from "../../../components/models/FilterSlider";

const FilterStocksState = atom<Array<FilterGroup>>({
  key: 'FilterStocksState',
  dangerouslyAllowMutability: true,
  default: new Array<FilterGroup>(
    new FilterGroup({
      Name: 'Valuation',
      Filters: new Array<Filter>(
        new FilterSlider({
          Name: 'PE',
          Label: 'Price to Earnings Ratio',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'PB',
          Label: 'Price to Book Ratio',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'PC',
          Label: 'Price to Cash Flow Ratio',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'PS',
          Label: 'Price to Sales Ratio',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'ES',
          Label: 'Earnings per Share',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'EVEBITDA',
          Label: 'EV/EBITDA',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'EVEBIT',
          Label: 'EV/EBIT',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'EVFCF',
          Label: 'EV/FCF',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'EVSales',
          Label: 'EV/Sales',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'PriceNETWorkingCapital',
          Label: 'Price to NET Working Capital',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'PriceFreeCashFlow',
          Label: 'Price to Free Cash Flow',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
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
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'ROIC',
          Label: 'ROIC',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'ROA',
          Label: 'ROA',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
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
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'EBITMargin',
          Label: 'EBIT Margin',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'EBITDAMargin',
          Label: 'EBITDA Margin',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'GrossMargin',
          Label: 'Gross Margin',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'ProfitMargin',
          Label: 'Profit Margin',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'OperatingProfitMargin',
          Label: 'Operating Profit Margin',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
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
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'NETDebtEBITRatio',
          Label: 'NET Debt to EBIT Ratio',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'DebtEquityRatio',
          Label: 'Debt to Equity Ratio (D/E)',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'ShareholderEquityRatio',
          Label: 'Shareholder Equity Ratio',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
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
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'CompondAnnualGrowth3Years',
          Label: 'CAGR - 3 Years',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'CompondAnnualGrowth5Years',
          Label: 'CAGR - 5 Years',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
          Range: true,
          Disabled: false
        }),
        new FilterSlider({
          Name: 'AvarageAnnualGrowth5Years',
          Label: 'Average Annual Growth Rate',
          MaxValue: 999,
          MinValue: -999,
          Value: [-999, 999],
          Initial: [-999, 999],
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

export default FilterStocksState;