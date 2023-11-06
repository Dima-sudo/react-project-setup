import React from 'react';

export interface TabPanelProps {
    children?: React.ReactNode | React.ReactElement;
    dir?: string;
    index: number;
    value: number;
}

export interface ITab {
    label: string;
    content: React.ReactNode | React.ReactElement;
    isDisabled?: boolean;
    dataTestId?: string;
}
