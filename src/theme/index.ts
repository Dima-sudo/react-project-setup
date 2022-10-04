import { colors } from './colors';
import { mediaQueries } from './media';
import { params } from './params';
import { shadows } from './shadows';

interface Theme {
    colors: Record<string, string>;
    shadows: {
        boxShadows: Record<string, string>;
        textShadows: Record<string, string>;
    };
    mediaQueries: Record<string, string>;
    params: Record<string, string>;
}

export const theme: Theme = { colors, shadows, mediaQueries, params };
