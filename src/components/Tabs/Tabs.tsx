import React, { useState, useCallback, SyntheticEvent } from 'react';

import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import SwipeableViews from 'react-swipeable-views';

import TabPanel from './components/TabPanel/TabPanel';

import { HexColor } from '../../types/common.types';
import { ITab } from './Tabs.types';
import { DataTestIds } from './Tabs.constants';
import * as S from './Tabs.style';

interface IProps {
    tabs: ITab[];
    color?: HexColor;
    tabsBackgroundColor?: HexColor;
    variant?: 'transparent' | 'primary';
    layout?: 'standard' | 'fullWidth' | 'scrollable';
    className?: string;
    ariaLabel?: string;
}

const Tabs: React.FC<IProps> = ({
    tabs,
    color,
    tabsBackgroundColor,
    variant = 'primary',
    layout = 'standard',
    className,
    ariaLabel = 'aria-tabs-component',
    ...rest
}) => {
    const theme = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onChange = (event: SyntheticEvent, index: number) => {
        setSelectedIndex(index);
    };

    const onSwipeableChange = (index: number) => {
        setSelectedIndex(index);
    };

    const a11yProps = useCallback(
        (index: number) => ({
            id: `tab-${index}`,
            'aria-controls': `tabpanel-${index}`,
        }),
        []
    );

    return (
        <S.ComponentContainer
            {...{ tabsBackgroundColor, variant, className }}
            data-testid={DataTestIds.COMPONENT_CONTAINER}
        >
            <S.Tabs
                value={selectedIndex}
                onChange={onChange}
                variant={layout}
                aria-label={ariaLabel}
                TabIndicatorProps={{
                    sx: { backgroundColor: color || 'primary' },
                }}
                color={color}
                {...rest}
            >
                {tabs.map(({ label, isDisabled, dataTestId }, index) => (
                    <Tab
                        label={label}
                        key={label}
                        disabled={isDisabled}
                        data-testid={dataTestId || `tabs-tab__${index}`}
                        {...a11yProps(index)}
                    />
                ))}
            </S.Tabs>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={selectedIndex}
                onChangeIndex={onSwipeableChange}
            >
                {tabs.map(({ content }, index) => (
                    <TabPanel
                        value={selectedIndex}
                        index={index}
                        dir={theme.direction}
                        key={`tab-content__${content?.toString().slice(0, 10)}`}
                    >
                        {content}
                    </TabPanel>
                ))}
            </SwipeableViews>
        </S.ComponentContainer>
    );
};

export default Tabs;
