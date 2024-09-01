import * as React from "react";

interface ErrorBoundaryProps {
  children?: React.ReactNode; // 假设 children 是可选的
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.log("🚀 ~ getDerivedStateFromError ~ error:", error);

    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("🚀 ~ componentDidCatch ~ error, errorInfo:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      console.log("🚀 ~ render ~ this.state.hasError:", this.state.hasError);
      return <h1>Something went wrong.</h1>;
    }

    // 确保 children 存在再返回
    const { children } = this.props;
    return children ? children : null;
  }
}

export default ErrorBoundary;
