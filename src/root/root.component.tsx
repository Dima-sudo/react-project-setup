import React, { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../normalize.css';

const Root = () => {
    const queryClient = new QueryClient();

    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <main>Hello World!</main>
            </QueryClientProvider>
        </StrictMode>
    );
};

export default Root;
