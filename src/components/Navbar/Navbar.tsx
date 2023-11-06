import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';

import NavbarMenu from './components/NavbarMenu/NavbarMenu';

import { IconNamesEnum } from '../SvgIcon/SvgIcon.constants';
import { DataTestIds } from './Navbar.constants';
import { theme } from '../../theme';
import * as S from './Navbar.style';

interface IProps {
    userEmail: string;
    menuItems?: string[];
    featureFlagNavbarMenu?: boolean;
}

const Navbar: React.FC<IProps> = ({
    userEmail,
    menuItems,
    featureFlagNavbarMenu = true,
}) => {
    const { t } = useTranslation();
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const isMenuOpen = Boolean(anchorElUser);

    const userDetails = (
        <S.UserSectionContainer>
            <S.AvatarIcon
                data-testid={DataTestIds.USER_AVATAR}
                iconName={IconNamesEnum.AVATAR}
                onClick={
                    featureFlagNavbarMenu ? handleOpenUserMenu : () => null
                }
                height="2rem"
                width="2rem"
                isButton={featureFlagNavbarMenu}
            />

            <S.UserEmail
                onClick={handleOpenUserMenu}
                data-testid={DataTestIds.USER_EMAIL}
            >
                {userEmail}
            </S.UserEmail>

            {featureFlagNavbarMenu && (
                <S.MenuArrowIcon
                    iconName={IconNamesEnum.ARROW_DOWN}
                    open={isMenuOpen}
                    color={theme.colors.text1}
                    isButton
                    onClick={handleOpenUserMenu}
                />
            )}
        </S.UserSectionContainer>
    );

    return (
        <S.AppBar
            position="static"
            id="back-to-top-anchor"
            data-testid={DataTestIds.COMPONENT_CONTAINER}
        >
            {/* <Container maxWidth="xl" style={{ border: '1px solid red' }}> */}
            <S.ToolbarContainer>
                <Toolbar disableGutters>
                    <S.NavbarContentContainer {...{ featureFlagNavbarMenu }}>
                        {featureFlagNavbarMenu ? (
                            <Tooltip title={t('navbar.openSettingsTooltip')}>
                                {userDetails}
                            </Tooltip>
                        ) : (
                            userDetails
                        )}

                        {featureFlagNavbarMenu && (
                            <NavbarMenu
                                {...{
                                    handleCloseUserMenu,
                                    anchorElUser,
                                    isMenuOpen,
                                }}
                                items={menuItems ?? []}
                            />
                        )}
                    </S.NavbarContentContainer>
                </Toolbar>
            </S.ToolbarContainer>
            {/* </Container> */}
        </S.AppBar>
    );
};
export default Navbar;
