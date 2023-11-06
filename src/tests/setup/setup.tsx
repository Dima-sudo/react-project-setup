import React, { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { I18nextProvider } from 'react-i18next';

import { theme as CustomTheme } from '../../theme';
import i18n from '../../i18n';

interface IProps {
    children: React.ReactNode | React.ReactElement;
}

const Setup: React.FC<IProps> = ({ children }) => {
    const queryClient = new QueryClient();
    const theme = createTheme({ custom: CustomTheme });

    return (
        <StrictMode>
            <I18nextProvider i18n={i18n}>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
                </QueryClientProvider>
            </I18nextProvider>
        </StrictMode>
    );
};

export default Setup;
