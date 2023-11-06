/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Layout, Error } from '../../pages';
import { useRoutes } from './useRoutes';

interface Route {
    path: string;
    element: ReactNode;
    errorElement?: ReactNode;
    children?: any;
}

const useAppRouter = () => {
    const { Routes } = useRoutes();

    const routes: Route[] = [
        {
            path: '/',
            element: <Layout />,
            errorElement: <Error />,
            children: Routes.map(({ path, element }) => ({
                path,
                element: (
                    <AnimatePresence mode="wait">
                        {/* @TODO Refactor Animate component */}
                        <motion.div
                            initial={{ opacity: 0, x: 25 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            exit={{ opacity: 0, x: -25 }}
                            key={path}
                            transition={{
                                duration: 0.15, // control the speed of the animation
                                delay: 0.1, // add a delay before the animation starts
                            }}
                        >
                            <Suspense fallback={<div>Loading...</div>}>
                                {element}
                            </Suspense>
                        </motion.div>
                    </AnimatePresence>
                ),
            })),
        },
    ];

    const router = createBrowserRouter(routes);

    return { router };
};

export default useAppRouter;
