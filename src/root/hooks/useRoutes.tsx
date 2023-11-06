import React, { lazy, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IconNamesEnum } from '../../components/SvgIcon/SvgIcon.constants';

const Document = lazy(() => import('../../pages/Document/Document'));
// eslint-disable-next-line import/no-cycle
const Home = lazy(() => import('../../pages/Home/Home'));

export const useRoutes = () => {
    const { t } = useTranslation();

    const RoutesEnum = useMemo(
        () =>
            ({
                HOME: '/',
                DOCUMENT: '/library/document',
            } as const),
        []
    );

    const RouteLabelsEnum = useMemo(
        () =>
            ({
                '/': t('routes.home'),
                'library/document': t('routes.document'),
            } as const),
        [t]
    );

    const RouteLabelsIconNames = useMemo(
        () =>
            ({
                '/': IconNamesEnum.HOME,
                'library/document': IconNamesEnum.OBJECT,
            } as const),
        []
    );

    const Routes = [
        {
            path: RoutesEnum.HOME,
            element: <Home />,
        },
        {
            path: RoutesEnum.DOCUMENT,
            element: <Document />,
        },
    ] as const;

    return { RoutesEnum, RouteLabelsEnum, RouteLabelsIconNames, Routes };
};
