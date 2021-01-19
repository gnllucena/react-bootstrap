import React, { ErrorInfo, Component } from 'react';
import { globalHistory, HistoryUnsubscribe, Link } from '@reach/router';
import { Result } from 'antd';
import Button from '../../form/Button/Button';

class ErrorBoundary extends Component {
  public state = {
    hasError: false
  };

  public historyUnsubscribe: HistoryUnsubscribe | undefined = undefined;

  public static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    this.historyUnsubscribe = globalHistory.listen(() => {
      this.setState({ hasError: false });
      
      if (this.historyUnsubscribe) {
        this.historyUnsubscribe();
      }
    });

    //todo: send information to server
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Result
          status="500"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            transform: "translate(-50%, -50%)",
            margin: "0"
          }}
          title="Sorry, something went wrong."
          subTitle="You asked for something and... you found a bug, congratulations! We know about this and we are fixing it."
          extra={
            <Link to="/">
              <Button text="Go to home" type="button" design="primary" size="small" style={{width: "200px"}} />
            </Link>            
          }
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
