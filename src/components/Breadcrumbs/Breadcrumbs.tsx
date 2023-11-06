import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import BreadcrumbsComponent from '@mui/material/Breadcrumbs';

import { useRoutes } from '../../root/hooks/useRoutes';
import SvgIcon from '../SvgIcon/SvgIcon';
import { IconNamesEnum } from '../SvgIcon/SvgIcon.constants';

import * as S from './Breadcrumbs.style';
import {
    SELECTED_BREADCRUMB_COLOR,
    UNSELECTED_BREADCRUMB,
} from './Breadcrumbs.constants';

const Breadcrumbs = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { RoutesEnum, RouteLabelsEnum, RouteLabelsIconNames } = useRoutes();

    const [routeElements, setRouteElements] = useState<string[]>([
        RoutesEnum.HOME,
    ]); // Splitting on '/' requires manually adding home route

    const [routeElementLabels, setRouteElementLabels] = useState<string[]>([
        RouteLabelsEnum['/'],
    ]);

    const [selectedRouteElementIndex, setSelectedRouteElementIndex] =
        useState<number>();

    const [previousLocation, setPreviousLocation] = useState<string>(
        location.pathname
    );

    useEffect(() => {
        const newRouteElements = [
            RoutesEnum.HOME,
            ...location.pathname.split('/').filter(Boolean),
        ];

        setRouteElements(newRouteElements);

        const labels = newRouteElements.map(
            (element: string) =>
                RouteLabelsEnum[element as keyof typeof RouteLabelsEnum]
        );

        setRouteElementLabels(labels);

        if (location.pathname !== previousLocation) {
            setPreviousLocation(location.pathname);
        }
    }, [location.pathname, RoutesEnum.HOME, RouteLabelsEnum, previousLocation]);

    useEffect(() => {
        setSelectedRouteElementIndex(routeElements.length - 1);
    }, [previousLocation, routeElements]);

    const onClickBreadcrumb = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        element: string
    ) => {
        event.nativeEvent.preventDefault();
        const index = routeElementLabels.indexOf(element);
        const urlToNavitateTo =
            index === 0
                ? RoutesEnum.HOME
                : routeElements
                      .slice(0, index + 1)
                      .join('/')
                      .substring(1);

        setSelectedRouteElementIndex(index);
        navigate(urlToNavitateTo);
    };

    return (
        <BreadcrumbsComponent
            separator={
                <SvgIcon
                    iconName={IconNamesEnum.NAVIGATE_NEXT}
                    color={UNSELECTED_BREADCRUMB}
                />
            }
            aria-label="breadcrumb"
        >
            {routeElementLabels.map((element, index) => {
                const icon =
                    RouteLabelsIconNames[
                        routeElements[
                            index
                        ] as keyof typeof RouteLabelsIconNames
                    ];
                const isShowIcon = !!icon && typeof icon === 'string';

                return index === selectedRouteElementIndex ? (
                    <S.SelectedBreadcrumb key={element}>
                        <S.FlexContainer>
                            {isShowIcon && (
                                <S.SvgIcon
                                    color={SELECTED_BREADCRUMB_COLOR}
                                    iconName={icon}
                                />
                            )}
                            <S.BreadcrumbText>{element}</S.BreadcrumbText>
                        </S.FlexContainer>
                    </S.SelectedBreadcrumb>
                ) : (
                    <S.Link
                        underline="hover"
                        key={element}
                        color="inherit"
                        href="/"
                        onClick={(
                            event: React.MouseEvent<
                                HTMLAnchorElement,
                                MouseEvent
                            >
                        ) => onClickBreadcrumb(event, element)}
                    >
                        <S.FlexContainer>
                            {isShowIcon && (
                                <S.SvgIcon
                                    color={UNSELECTED_BREADCRUMB}
                                    iconName={icon}
                                />
                            )}
                            <S.BreadcrumbText>{element}</S.BreadcrumbText>
                        </S.FlexContainer>
                    </S.Link>
                );
            })}
        </BreadcrumbsComponent>
    );
};

export default Breadcrumbs;
