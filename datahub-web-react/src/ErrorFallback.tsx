import React from 'react';
import { Button, Result } from 'antd';
import type { FallbackProps } from 'react-error-boundary';

/**
 * Error Fallback component that displays when a React error occurs.
 * Provides a user-friendly message and option to reload the page.
 */
export const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
    const handleReload = () => {
        // Try to reset the error boundary first
        resetErrorBoundary();
        
        // If that doesn't work, force a page reload
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };

    const isDevelopment = process.env.NODE_ENV === 'development';

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '100vh',
            padding: '20px',
            backgroundColor: '#f5f5f5'
        }}>
            <Result
                status="500"
                title="Oops! Something went wrong"
                subTitle="We're sorry, but something unexpected happened. Please try reloading the page."
                extra={
                    <Button type="primary" size="large" onClick={handleReload}>
                        Reload Page
                    </Button>
                }
            />
            
            {/* Show error details in development mode */}
            {isDevelopment && error && (
                <div style={{ 
                    marginTop: '20px', 
                    padding: '16px',
                    backgroundColor: '#fff2f0',
                    border: '1px solid #ffccc7',
                    borderRadius: '6px',
                    maxWidth: '800px',
                    width: '100%'
                }}>
                    <h4 style={{ color: '#cf1322', marginBottom: '8px' }}>
                        Development Error Details:
                    </h4>
                    <pre style={{ 
                        color: '#cf1322',
                        fontSize: '12px',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                        margin: 0
                    }}>
                        {error.message}
                        {error.stack && '\n\nStack trace:\n' + error.stack}
                    </pre>
                </div>
            )}
        </div>
    );
};