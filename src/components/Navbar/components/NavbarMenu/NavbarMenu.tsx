import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import * as S from './NavbarMenu.style';

interface IProps {
    handleCloseUserMenu: () => void;
    anchorElUser: null | HTMLElement;
    isMenuOpen: boolean;
    items: string[];
}

const NavbarMenu: React.FC<IProps> = ({
    handleCloseUserMenu,
    anchorElUser,
    isMenuOpen,
    items,
}) => (
    <S.Menu
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleCloseUserMenu}
    >
        {items.map((item) => (
            <MenuItem key={item} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{item}</Typography>
            </MenuItem>
        ))}
    </S.Menu>
);

export default NavbarMenu;
