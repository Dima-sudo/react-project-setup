import React from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { ITheme } from '../../theme';
import { IconNamesEnum, SvgRenderer, Icons } from './SvgIcon.constants';
import * as S from './SvgIcon.style';

type IconName = IconNamesEnum[keyof IconNamesEnum];
interface IProps {
    iconName: IconName;
    width?: `${string}rem`;
    height?: `${string}rem`;
    color?: keyof ITheme['colors'];
    isButton?: boolean;
    // eslint-disable-next-line no-unused-vars
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    className?: string;
}

const SvgIcon: React.FC<IProps> = ({
    iconName,
    isButton = false,
    width,
    height,
    color,
    onClick,
    className,
    ...rest
}) => {
    // @ts-ignore
    const Icon = SvgRenderer(iconName as string);

    return isButton ? (
        <S.IconButton
            {...{ width, height, onClick, className }}
            fill={color}
            color="inherit"
            {...rest}
        >
            {/* {SvgRenderer(iconName as string)} */}
            {/* <UploadFileIcon /> */}
            {Icon}
        </S.IconButton>
    ) : (
        <S.Wrapper
            {...{ width, height, onClick, className }}
            fill={color}
            {...rest}
        >
            {/* {SvgRenderer(iconName as string)} */}
            {/* <UploadFileIcon /> */}
            {Icon}
        </S.Wrapper>
    );
};

export default SvgIcon;
