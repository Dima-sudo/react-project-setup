import { styled } from '@mui/material/styles';

export const FooterContainer = styled('footer')(
    ({
        theme: {
            custom: { colors, params },
        },
    }) => ({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.gray20,
        transition: params.transitionDefault, // Smooth transition when it's pushed down by page content
    })
);

export const LinksContainer = styled('section')(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        backgroundColor: colors.gray30,
        display: 'flex',
        color: colors.gray60,
    })
);

export const Column = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center',
    flex: 1,
    textAlign: 'center',
    padding: '1.5rem',
}));

export const FooterItem = styled('span')(() => ({
    paddingBottom: '0.5rem',
}));

export const DisclaimerContainer = styled('section')(
    ({
        theme: {
            custom: { colors, params },
        },
    }) => ({
        backgroundColor: colors.gray60,
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
        borderTopLeftRadius: params.borderRadius,
        borderTopRightRadius: params.borderRadius,
    })
);

export const DisclaimerParagraph = styled('section')(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        color: colors.gray30,
        marginBottom: '1rem',
    })
);
