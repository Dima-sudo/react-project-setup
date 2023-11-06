import { IconNamesEnum } from '../SvgIcon/SvgIcon.constants';

export interface SideMenuItem {
    label: string;
    iconName?: IconNamesEnum | null;
    route: string;
}
