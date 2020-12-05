import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { RouteComponentProps, useLocation, useNavigate } from '@reach/router';

const ScrollToTop: FunctionComponent<RouteComponentProps> = (props) => {
  const navigate = useNavigate();
  const { href, state } = useLocation();

  const updateState = useCallback(() => {
    navigate(href, {
      state: { ...state, scrolled: true },
      replace: true,
    }).then(() => window?.scrollTo(0, 0));
  }, [href, state, navigate]);

  useEffect(updateState, []);

  useEffect(() => {
    if (!(state as any)?.scrolled) {
      updateState();
    }
  }, [state, updateState]);

  return (
    <>
      {props.children}
    </>
  );
}

export default ScrollToTop;
