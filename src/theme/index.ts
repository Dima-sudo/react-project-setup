import { colors } from './colors';
import { mediaQueries } from './media';
import { params } from './params';
import { shadows } from './shadows';

export interface ITheme {
    colors: Record<string, string>;
    shadows: {
        boxShadows: Record<string, string>;
        textShadows: Record<string, string>;
    };
    mediaQueries: Record<string, string>;
    params: Record<string, string>;
}

export const theme: ITheme = { colors, shadows, mediaQueries, params };
