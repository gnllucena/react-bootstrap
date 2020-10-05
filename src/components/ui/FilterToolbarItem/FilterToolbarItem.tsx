import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import Filter from '../../models/Filter';
import FilterCheckbox from '../../models/FilterCheckbox';
import FilterGroup from '../../models/FilterGroup';
import FilterSlider from '../../models/FilterSlider';
import FilterToolbarItemCheckbox from '../FilterToolbarItemCheckbox/FilterToolbarItemCheckbox';
import FilterToolbarItemSlider from '../FilterToolbarItemSlider/FilterToolbarItemSlider';

export interface FilterToolbarItemProps {
  group: FilterGroup,
  filters: Array<Filter>,
  onChange(filters: Array<Filter>): void
}

const FilterToolbarItem: FunctionComponent<FilterToolbarItemProps> = ({
  group,
  filters,
  onChange
}) => {
  const beforeChange = (filter: Filter) => {
    const changed = filter.changed();

    const index = filters.indexOf(filter);

    if (changed && index === -1) {
      filters.push(filter);   
    } else if (!changed && index > -1) {
      filters.splice(index, 1); 
    }

    onChange(filters);
  }

  return (
    <Formik
      initialValues={{}}
      onSubmit={(): void => { }}
    >
      {(): JSX.Element => (
        <Form>
          {
            group.Filters.map((filter: Filter) => {
              switch (filter.constructor) {
                case FilterCheckbox:
                  const checkbox = filter as FilterCheckbox;
                  
                  return (
                    <FilterToolbarItemCheckbox
                      key={filter.Name}
                      filter={checkbox}
                      onChange={beforeChange}
                    />
                  );
                case FilterSlider:
                  const slider = filter as FilterSlider;
                  
                  return (
                    <FilterToolbarItemSlider
                      key={filter.Name}
                      filter={slider}
                      onChange={beforeChange}
                    />
                  );
                default:
                  throw new Error(`Filter not implemented: ${filter.constructor.name}`);
              }
            })
          }
        </Form>
      )}
    </Formik>
  )
}

export default FilterToolbarItem;
