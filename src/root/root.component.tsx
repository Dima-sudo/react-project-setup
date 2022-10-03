import React, { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import useAppRouter from './hooks/useAppRouter';

import '../normalize.css';

const Root = () => {
    const queryClient = new QueryClient();
    const { router } = useAppRouter();
    const theme = createTheme();

    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider {...{ theme }}>
                    <RouterProvider {...{ router }} />
                </ThemeProvider>
            </QueryClientProvider>
        </StrictMode>
    );
};

export default Root;
