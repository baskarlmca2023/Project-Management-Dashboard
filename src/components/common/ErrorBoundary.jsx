
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in component tree:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong in the form submission. Please try again later.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
