import React from 'react';

import { FallbackProps } from 'react-error-boundary';

const ErrorBoundary: React.FC<FallbackProps> = ({
    error,
    resetErrorBoundary,
}) => (
    <div role="alert">
        <p>Something went wrong</p>
        {error?.message && <pre>{error?.message}</pre>}

        {resetErrorBoundary && (
            <button type="button" onClick={resetErrorBoundary}>
                Try again
            </button>
        )}
    </div>
);

export default ErrorBoundary;
