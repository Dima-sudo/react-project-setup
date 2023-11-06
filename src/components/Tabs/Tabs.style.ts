import { styled } from '@mui/material/styles';

import TabsComponent from '@mui/material/Tabs';
import Box from '@mui/material/Box';

export const Tabs = styled(TabsComponent)(({ color }) => ({
    '& button.Mui-selected': {
        color: color || 'unset',
    },
}));

export const ComponentContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'tabsBackgroundColor',
})<{ tabsBackgroundColor?: string; variant?: string }>(
    ({
        theme: {
            custom: { colors, params, shadows },
        },
        tabsBackgroundColor,
        variant,
    }) => ({
        backgroundColor:
            variant !== 'transparent'
                ? tabsBackgroundColor || colors.white
                : 'transparent',
        borderRadius: params.borderRadius,
        boxShadow:
            variant !== 'transparent' ? shadows.boxShadows.boxShadow1 : 'unset',
        transition: params.transitionDefault,

        '&:hover': {
            boxShadow:
                variant !== 'transparent'
                    ? shadows.boxShadows.boxShadow2
                    : 'unset',
            transition: params.transitionDefault,
        },
    })
);
