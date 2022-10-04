import React from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorBoundaryFallbackComponent from '../../components/ErrorBoundary/ErrorBoundary';

const Layout = () => (
    <main>
        <ErrorBoundary
            FallbackComponent={ErrorBoundaryFallbackComponent}
            onReset={() => {
                window.location.reload();
            }}
        >
            <nav>Navigation</nav>
            <Outlet />
            <footer>Footer</footer>
        </ErrorBoundary>
    </main>
);

export default Layout;
