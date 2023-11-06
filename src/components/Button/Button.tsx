import React from 'react';
import ButtonComponent from '@mui/material/Button';
import { ColorValue, PredefinedButtonColors } from './Button.types';

interface IProps {
    variant?: 'contained' | 'text' | 'outlined';
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
    color?: ColorValue & PredefinedButtonColors;
    className?: string;
    children?: React.ReactElement | React.ReactNode;
}

const Button: React.FC<IProps> = ({
    variant = 'contained',
    type = 'button',
    onClick,
    disabled,
    color,
    className,
    children,
    ...rest
}) => (
    <ButtonComponent
        {...{ disabled, onClick, variant, type, color, className }}
        {...rest}
    >
        {children && children}
    </ButtonComponent>
);

export default Button;
