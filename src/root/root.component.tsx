import React, { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import useAppRouter from './hooks/useAppRouter';
import '../normalize.css';

const Root = () => {
    const queryClient = new QueryClient();
    const { router } = useAppRouter();

    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <RouterProvider {...{ router }} />
            </QueryClientProvider>
        </StrictMode>
    );
};

export default Root;
