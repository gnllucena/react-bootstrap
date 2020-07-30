import React, { ErrorInfo } from "react";
import { Link } from "@reach/router";

export class ErrorBoundary extends React.Component {
  public state = {
    hasError: false
  };

  public static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  
  public render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <h1>Something terrible happened...</h1>

          <p>You asked for something and... you found a bug, congratulations! We know about this and we are fixing it.</p>
          <p>Meanwhile, why don't you look for another <Link to="/" onClick={() => this.setState({ hasError: false })}>stock?</Link></p>
        </div>
      );
    }

    return this.props.children;
  }
}