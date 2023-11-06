/* eslint-disable no-unused-vars */
import React, { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import useAppRouter from './hooks/useAppRouter';

import { ITheme, theme as CustomTheme } from '../theme';
import '../normalize.css';

declare module '@mui/material/styles' {
    interface Theme {
        custom: ITheme;
    }
    interface ThemeOptions {
        custom: ITheme;
    }
}

const Root = () => {
    const queryClient = new QueryClient();
    const { router } = useAppRouter();
    const theme = createTheme({ custom: CustomTheme });

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
