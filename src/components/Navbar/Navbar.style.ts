import { styled } from '@mui/material/styles';

import AppBarComponent from '@mui/material/AppBar';
import SvgIconComponent from '../SvgIcon/SvgIcon';

export const AppBar = styled(AppBarComponent)(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        backgroundColor: colors.white,
        height: '5rem',

        '& > div': {
            height: '100%',
            '& > div': {
                height: '100%',
            },
        },
    })
);

export const UserEmail = styled('div')(
    ({
        theme: {
            custom: { colors },
        },
    }) => ({
        color: colors.text1,
        fontSize: '1rem',
        fontWeight: 500,
        paddingLeft: '1rem',
        display: 'flex',
        alignItems: 'center',
    })
);

export const UserSectionContainer = styled('div')(() => ({
    display: 'flex',
}));

export const MenuArrowIcon = styled(SvgIconComponent)<{ open: boolean }>(
    ({
        open,
        theme: {
            custom: { params },
        },
    }) => ({
        transform: open ? 'rotate(180deg)' : 'unset',
        transition: params.transitionDefault,
        paddingLeft: '0.5rem',
    })
);

export const NavbarContentContainer = styled('div')<{
    featureFlagNavbarMenu: boolean;
}>(({ featureFlagNavbarMenu }) => ({
    flexGrow: 0,
    marginLeft: 'auto',
    cursor: featureFlagNavbarMenu ? 'pointer' : 'unset',
}));

export const AvatarIcon = styled(SvgIconComponent)(() => ({
    padding: 0,
}));

export const ToolbarContainer = styled('div')(() => ({
    padding: '0 2.5rem',
}));
