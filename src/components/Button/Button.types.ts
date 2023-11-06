import { colors } from '../../theme/colors';

export type PredefinedButtonColors =
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';

type ColorKey = keyof typeof colors;
export type ColorValue = typeof colors[ColorKey];
