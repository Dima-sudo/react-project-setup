import { styled } from '@mui/material/styles';

import {
    ListItem as ListItemComponent,
    ListItemButton as ListItemButtonComponent,
    ListItemText as ListItemTextComponent,
    ListItemIcon as ListItemIconComponent,
} from '@mui/material';
import SvgIconComponent from '../SvgIcon/SvgIcon';
import ButtonComponent from '../Button/Button';

export const ComponentContainer = styled('div', {
    shouldForwardProp: (prop) => prop !== 'expanded',
})<{ expanded?: boolean }>(
    ({
        expanded,
        theme: {
            custom: { colors, params },
        },
    }) => ({
        height: '100vh',
        width: expanded ? params.sidebarMenuWidth : '5.75rem',
        borderRight: `2px solid ${colors.gray30}`,
        color: colors.text1,
        display: 'flex',
        flexDirection: 'column',
        transition: params.transitionDefault,
    })
);

export const TopContainer = styled('div', {
    shouldForwardProp: (prop) => prop !== 'expanded',
})<{ expanded?: boolean }>(({ expanded }) => ({
    padding: expanded ? '2rem' : '2rem 0',
    marginBottom: '1rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
}));

export const SvgIcon = styled(SvgIconComponent)(() => ({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1.5rem',
}));

export const CompanyNameTitle = styled('div', {
    shouldForwardProp: (prop) => prop !== 'expanded',
})<{ expanded: boolean }>(
    ({
        expanded,
        theme: {
            custom: { params },
        },
    }) => ({
        display: 'flex',
        justifyContent: expanded ? 'space-between' : 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        marginBottom: '0.75rem',
        fontSize: '1rem',
        letterSpacing: '0.1rem',
        textAlign: 'left',
        transition: params.transitionDefault,
        textTransform: 'uppercase',
    })
);

export const ListItem = styled(ListItemComponent, {
    shouldForwardProp: (prop) => prop !== 'expanded',
})<{ expanded: boolean }>(({ expanded }) => ({
    display: 'flex',
    justifyContent: expanded ? 'unset' : 'center',
    '& .MuiListItemIcon-root': {
        minWidth: 'unset',
        paddingRight: expanded ? '1rem' : 0,
    },
}));

export const ListItemButton = styled(ListItemButtonComponent, {
    shouldForwardProp: (prop) =>
        prop !== 'expanded' && prop !== 'isItemSelected',
})<{
    isItemSelected?: boolean;
    expanded: boolean;
}>(
    ({
        isItemSelected,
        expanded,
        theme: {
            custom: { colors, params },
        },
    }) => ({
        paddingLeft: expanded ? '2.225rem' : '1rem',
        backgroundColor: isItemSelected ? colors.blue10 : 'unset',
        transition: params.transitionDefault,
        height: '3.5rem',
        transform: isItemSelected
            ? `${params.scaleTransition1} ${
                  expanded ? 'translateX(-0.2rem)' : 'translateX(-0.05rem)'
              }`
            : undefined,

        '&:hover': {
            backgroundColor: isItemSelected ? colors.blue10 : null,
            transition: params.transitionDefault,
        },
    })
);

export const BottomContainer = styled('div')(() => ({
    flex: 1,
    display: 'flex',
    alignItems: 'end',
    marginBottom: '1rem',
}));

export const NewDocumentButton = styled(ButtonComponent, {
    shouldForwardProp: (prop) => prop !== 'expanded',
})<{
    expanded: boolean;
}>(
    ({
        expanded,
        theme: {
            custom: { params },
        },
    }) => ({
        transition: params.transitionDefault,
        width: expanded ? '100%' : '3rem',
        height: '3rem',
        minWidth: expanded ? 'fit-content' : 'unset',
        whiteSpace: 'nowrap',
    })
);

export const MenuToggleArrow = styled(SvgIconComponent, {
    shouldForwardProp: (prop) => prop !== 'expanded',
})<{
    expanded: boolean;
}>(
    ({
        expanded,
        theme: {
            custom: { params },
        },
    }) => ({
        transition: params.transitionDefault,
        transform: expanded ? 'rotate(180deg)' : 'unset',
    })
);

export const ListItemText = styled(ListItemTextComponent)(() => ({
    whiteSpace: 'nowrap',
}));

export const ListItemIcon = styled(ListItemIconComponent)(() => ({
    display: 'flex',
    justifyContent: 'center',
}));

export const PlusIcon = styled(SvgIconComponent, {
    shouldForwardProp: (prop) => prop !== 'expanded',
})<{ expanded: boolean }>(({ expanded }) => ({
    paddingRight: expanded ? '0.25rem' : 0,
}));
