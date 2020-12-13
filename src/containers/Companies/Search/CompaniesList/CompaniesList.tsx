import { List, Pagination as PaginationAntd } from 'antd';
import React, { FunctionComponent } from 'react';
import { Link } from '@reach/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CompaniesFilteredSelector, CompaniesPaginationState } from '../../../../store/CompanieState';
import { CompaniesListCardBig } from '../CompaniesListCardBig/CompaniesListCardBig';
import { CompaniesListCardSmall } from '../CompaniesListCardSmall/CompaniesListCardSmall';
import NoData from '../../../../components/ui/NoData/NoData';
import useIsFullscreen from '../../../../components/hooks/UseIsFullscreen';
import Pagination from '../../../../domain/Pagination';
import StockPartial from '../../../../domain/CompanyPartial';
import { Content } from 'antd/lib/layout/layout';

export const CompaniesList: FunctionComponent = () => {
  const [companiesPagination, setCompaniesPagination] = useRecoilState(CompaniesPaginationState);
  const companiesFiltered = useRecoilValue(CompaniesFilteredSelector);
  const isFullscreen = useIsFullscreen();
  
  const onPaginationChange = (page: number) => {
    let pagination = new Pagination<StockPartial>({
      Limit: companiesPagination.Limit,
      Offset: companiesPagination.Limit * (page - 1),
      Total: companiesPagination.Total
    });

    setCompaniesPagination(pagination);

    window.scrollTo(0, 0);
  }

  const selected = (name: string) => {
    let query = name.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    query = query.toLocaleLowerCase();

    query = query.replace(new RegExp(' ', 'g'), '-');

    return query;
  }

  return (
    <Content>
      {
        companiesFiltered.Items.length > 0 ? (
          <List
            itemLayout="horizontal"
            dataSource={companiesFiltered.Items}
            split={false}
            renderItem={company => (
              <Link to={`${company.Id}/${selected(company.Name)}`}>
                <List.Item>
                  {
                    isFullscreen ? (
                      <CompaniesListCardBig company={company} />
                    ) : (
                      <CompaniesListCardSmall company={company} />
                    )
                  }
                </List.Item>
              </Link>
            )}
          />
        ) : (
          <NoData text="No data for the selected filters" />
        )
      }
      
      <PaginationAntd
        showLessItems
        onChange={onPaginationChange}
        hideOnSinglePage={true}
        defaultCurrent={0} 
        pageSize={companiesFiltered.Limit}
        showSizeChanger={false}
        total={companiesFiltered.Total}
        current={Math.ceil(companiesFiltered.Offset / companiesFiltered.Limit + 1)}
      />
    </Content>
  );
};