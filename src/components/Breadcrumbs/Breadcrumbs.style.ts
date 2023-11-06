import { styled } from '@mui/material/styles';

import LinkComponent from '@mui/material/Link';
import SvgIconComponent from '../SvgIcon/SvgIcon';

export const SelectedBreadcrumb = styled('span')(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        color: colors.blue,
        fontWeight: 300,
    })
);

export const Link = styled(LinkComponent)(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        fontWeight: 300,
        color: colors.gray60,
    })
);

export const FlexContainer = styled('div')(() => ({
    display: 'flex',
}));

export const SvgIcon = styled(SvgIconComponent)(() => ({
    marginRight: '0.5rem',
    fontSize: 'inherit',
}));

export const BreadcrumbText = styled('div')(() => ({}));
