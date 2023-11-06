import { styled } from '@mui/material/styles';
import { Container as ContainerComponent } from '@mui/material';

export const Main = styled('main')`
    font-family: sans-serif;
`;

export const PageContentContainer = styled('div')(
    ({
        theme: {
            custom: { params },
        },
    }) => ({
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100dvh',
        overflowY: 'auto',
    })
);

export const FlexContainer = styled('div')(() => ({
    display: 'flex',
}));

export const OutletContainer = styled('div')(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        flex: '1',
        backgroundColor: colors.gray10,
        padding: '1.625rem 2.5rem',
    })
);

export const Container = styled(ContainerComponent)(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        background: colors.gray10,
    })
);

export const BreadcrumbsContainer = styled('div')(() => ({
    margin: '2rem 0',
}));
