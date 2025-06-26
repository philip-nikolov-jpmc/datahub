import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './ErrorFallback';

interface GlobalErrorBoundaryProps {
    children: React.ReactNode;
}

/**
 * Global Error Boundary component that catches all unhandled React errors
 * and displays a user-friendly fallback UI instead of the white screen of death.
 */
export const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ children }) => {
    const handleError = (error: Error, errorInfo: { componentStack: string }) => {
        // Log error to console (in development and production)
        console.error('Global Error Boundary caught an error:', error);
        console.error('Component stack:', errorInfo.componentStack);
        
        // In a real application, you would send this to your error monitoring service
        // Example: Sentry.captureException(error, { extra: errorInfo });
        
        // You could also send to your analytics service
        // Example: analytics.track('React Error', { error: error.message, stack: error.stack });
    };

    const handleReset = () => {
        // This function is called when the user clicks "Try Again"
        // You can add any cleanup logic here if needed
        console.log('Error boundary reset');
        
        // Clear any error state in your global state management if needed
        // Example: dispatch({ type: 'CLEAR_ERROR' });
    };

    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={handleError}
            onReset={handleReset}
        >
            {children}
        </ErrorBoundary>
    );
};