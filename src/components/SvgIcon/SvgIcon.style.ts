import { styled } from '@mui/material/styles';

import IconButtonComponent from '@mui/material/IconButton';
import { ITheme } from '../../theme/index';

export const IconButton = styled(IconButtonComponent)<{
    width?: `${string}rem`;
    height?: `${string}rem`;
    fill?: keyof ITheme['colors'];
}>(({ theme, width, height, fill }) => ({
    '& svg': {
        color: fill || theme.custom.colors.white,
        width: width || '1.5rem',
        height: height || '1.5rem',
        display: 'block',
    },
}));

export const Wrapper = styled('div')<{
    width?: `${string}rem`;
    height?: `${string}rem`;
    fill?: keyof ITheme['colors'];
}>(({ theme, width, height, fill }) => ({
    display: 'flex',
    alignItems: 'center',

    '& svg': {
        color: fill || theme.custom.colors.white,
        width: width || '1.5rem',
        height: height || '1.5rem',
        display: 'block',
    },
}));
