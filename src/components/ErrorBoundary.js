import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  componentDidCatch(error) {
    if (window.gtag) {
      window.gtag('event', 'exception', {
        'description': error.message,
        'fatal': true,
      });
    }
  }

  _retry = () => {
    this.setState({ error: null });
  };

  render() {
    const { children, fallback } = this.props;
    const { error } = this.state;
    if (error) {
      if (typeof fallback === 'function') {
        return fallback(error, this._retry);
      }
      return fallback;
    }
    return children;
  }
}
