/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout, Error, Home } from '../../pages';

interface Route {
    path: string;
    element: ReactNode;
    errorElement?: ReactNode;
    children?: any;
}

const useAppRouter = () => {
    const routes: Route[] = [
        {
            path: '/',
            element: <Layout />,
            errorElement: <Error />,
            children: [{ path: '/', element: <Home /> }],
        },
    ];

    const router = createBrowserRouter(routes);

    return { router };
};

export default useAppRouter;
