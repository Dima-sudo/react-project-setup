import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import * as S from './SideMenu.style';

import { SideMenuItem } from './SideMenu.types';
import SvgIcon from '../SvgIcon/SvgIcon';
import { theme } from '../../theme';
import { IconNamesEnum } from '../SvgIcon/SvgIcon.constants';
import { colors } from '../../theme/colors';
import Animate from '../Animate/Animate';
import { DataTestIds } from './SideMenu.constants';

interface IProps {
    items?: SideMenuItem[];
    bottomItems?: SideMenuItem[];
    hasTopContainer?: boolean;
}

const SideMenu: React.FC<IProps> = ({
    items,
    bottomItems,
    hasTopContainer = true,
}) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const location = useLocation();

    const [expanded, setExpanded] = useState<boolean>(true);

    const [selectedListItem, setSelectedListItem] =
        useState<SideMenuItem | null>(null);

    const onClickListItem = (item: SideMenuItem) => {
        navigate(item.route);
        setSelectedListItem(item);
    };

    useEffect(() => {
        const path = location.pathname;
        const currentItem = items?.find((item) => item.route === path);

        if (currentItem) {
            setSelectedListItem(currentItem);
        }
    }, [items, location.pathname]);

    return (
        <S.ComponentContainer
            {...{ expanded }}
            data-testid={DataTestIds.COMPONENT_CONTAINER}
        >
            {hasTopContainer && (
                <S.TopContainer
                    {...{ expanded }}
                    data-testid={DataTestIds.TOP_CONTAINER}
                >
                    <S.CompanyNameTitle
                        {...{ expanded }}
                        data-testid={DataTestIds.APP_NAME}
                    >
                        {expanded && (
                            <Animate
                                isVisible={expanded}
                                animationType="slideLeft"
                                durationSeconds={0.2}
                            >
                                {t('sidebar.appName')}
                            </Animate>
                        )}

                        <S.MenuToggleArrow
                            data-testid={DataTestIds.ARROW_TOGGLE_BUTTON}
                            iconName={IconNamesEnum.ARROW_RIGHT_LARGE}
                            color={colors.gray70}
                            onClick={() => setExpanded(!expanded)}
                            width="1.5rem"
                            height="1.5rem"
                            {...{ expanded }}
                            isButton
                        />
                    </S.CompanyNameTitle>

                    <div>
                        <S.NewDocumentButton
                            {...{ expanded }}
                            data-testid={DataTestIds.NEW_DOC_BUTTON}
                        >
                            {expanded ? (
                                <>
                                    <S.PlusIcon
                                        iconName={IconNamesEnum.PLUS}
                                        {...{ expanded }}
                                    />
                                    {t('sidebar.startButton')}{' '}
                                </>
                            ) : (
                                <S.PlusIcon
                                    iconName={IconNamesEnum.PLUS}
                                    {...{ expanded }}
                                />
                            )}
                        </S.NewDocumentButton>
                    </div>
                </S.TopContainer>
            )}

            {items && (
                <div>
                    {items.map((item) => {
                        const isItemSelected =
                            selectedListItem?.route === item.route;
                        const { colors } = theme;

                        return (
                            <S.ListItemButton
                                key={item.label}
                                isItemSelected={isItemSelected}
                                {...{ expanded }}
                                onClick={() => onClickListItem(item)}
                            >
                                <S.ListItem disablePadding {...{ expanded }}>
                                    {item.iconName && (
                                        <S.ListItemIcon>
                                            <SvgIcon
                                                iconName={item.iconName}
                                                color={
                                                    isItemSelected
                                                        ? colors.blue
                                                        : colors.gray40
                                                }
                                            />
                                        </S.ListItemIcon>
                                    )}

                                    {expanded && (
                                        <Animate
                                            isVisible={expanded}
                                            animationType="slideLeft"
                                            durationSeconds={0.2}
                                        >
                                            <S.ListItemText
                                                primary={item.label}
                                            />
                                        </Animate>
                                    )}
                                </S.ListItem>
                            </S.ListItemButton>
                        );
                    })}
                </div>
            )}

            {bottomItems && (
                <S.BottomContainer>
                    {bottomItems.map((item) => (
                        <S.ListItemButton
                            key={item.label}
                            {...{ expanded }}
                            onClick={() => onClickListItem(item)}
                        >
                            <S.ListItem disablePadding {...{ expanded }}>
                                {item.iconName && (
                                    <S.ListItemIcon>
                                        <SvgIcon
                                            iconName={item.iconName}
                                            color={theme.colors.gray40}
                                        />
                                    </S.ListItemIcon>
                                )}
                                {expanded && (
                                    <Animate
                                        isVisible={expanded}
                                        animationType="slideLeft"
                                        durationSeconds={0.2}
                                    >
                                        <S.ListItemText primary={item.label} />
                                    </Animate>
                                )}
                            </S.ListItem>
                        </S.ListItemButton>
                    ))}
                </S.BottomContainer>
            )}
        </S.ComponentContainer>
    );
};

export default SideMenu;
