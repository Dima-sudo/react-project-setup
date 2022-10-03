/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout, Error } from '../../pages';

const Home = lazy(() => import('../../pages/Home/Home'));

interface Route {
    path: string;
    element: ReactNode;
    errorElement?: ReactNode;
    children?: any;
}

const useAppRouter = () => {
    const routeData = [
        {
            path: '/',
            element: <Home />,
        },
    ];

    const routes: Route[] = [
        {
            path: '/',
            element: <Layout />,
            errorElement: <Error />,
            children: routeData.map(({ path, element }) => ({
                path,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        {element}
                    </Suspense>
                ),
            })),
        },
    ];

    const router = createBrowserRouter(routes);

    return { router };
};

export default useAppRouter;
