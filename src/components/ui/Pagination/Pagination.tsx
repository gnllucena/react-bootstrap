import React, { FunctionComponent } from 'react';

import './Pagination.scss';

const Pagination: FunctionComponent = (props) => {
  return (
    <div className="pagination-items">
      {props.children}
    </div>
  );
};

export default Pagination;
