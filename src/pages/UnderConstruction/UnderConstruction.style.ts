import { styled } from '@mui/material/styles';

export const PageContainer = styled('section')(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '2.49rem',
        color: colors.text4,
    })
);

export const PageTitle = styled('h2')(() => ({
    fontSize: '3rem',
}));

export const Text = styled('p')(() => ({
    fontSize: '1.5rem',
    fontWeight: 300,
    textAlign: 'center',
    width: '65rem',
}));
