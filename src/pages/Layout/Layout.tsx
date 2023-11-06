import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SideMenu from '../../components/SideMenu/SideMenu';
import ErrorBoundaryFallbackComponent from '../../components/ErrorBoundary/ErrorBoundary';

import * as S from './Layout.style';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { useRoutes } from '../../root/hooks/useRoutes';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Layout = () => {
    // const { RoutesEnum, RouteLabelsIconNames } = useRoutes();
    // const { t } = useTranslation();
    const scrollContainerRef = useRef(null);
    const scrollPosition = useScrollPosition(scrollContainerRef);
    const isButtonVisible = !(scrollPosition.y === 0);

    return (
        <S.Main>
            <ErrorBoundary
                FallbackComponent={ErrorBoundaryFallbackComponent}
                onReset={() => {
                    window.location.reload();
                }}
            >
                <S.FlexContainer>
                    <SideMenu />

                    <S.PageContentContainer ref={scrollContainerRef}>
                        <Navbar
                            userEmail="diborodin@deloitte.co.il"
                            featureFlagNavbarMenu={false}
                        />
                        <S.OutletContainer>
                            {/* <S.Container disableGutters maxWidth="xl"> */}
                            {/* <S.BreadcrumbsContainer>
                                    <Breadcrumbs />
                                </S.BreadcrumbsContainer> */}
                            <Outlet />
                            {/* </S.Container> */}
                        </S.OutletContainer>
                        {/* <Footer /> */}
                    </S.PageContentContainer>
                </S.FlexContainer>

                <ScrollToTopButton {...{ isButtonVisible }} />
            </ErrorBoundary>
        </S.Main>
    );
};

export default Layout;
