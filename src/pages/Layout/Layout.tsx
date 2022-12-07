import React from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorBoundaryFallbackComponent from '../../components/ErrorBoundary/ErrorBoundary';

import * as S from './Layout.style';

const Layout = () => (
    <S.Main>
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
    </S.Main>
);

export default Layout;
