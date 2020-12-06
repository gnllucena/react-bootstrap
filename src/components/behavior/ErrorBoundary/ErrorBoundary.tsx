import React, { ErrorInfo, Component } from 'react';
import { Link } from '@reach/router';
import { Result } from 'antd';
import Button from '../../form/Button/Button';

class ErrorBoundary extends Component {
  public state = {
    hasError: false
  };

  public static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Result
          status="500"
          title="Sorry, something went wrong."
          subTitle="You asked for something and... you found a bug, congratulations! We know about this and we are fixing it."
          extra={
            <Link
              to="/"
              onClick={() => this.setState({
                hasError: false
              })}
            >
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
