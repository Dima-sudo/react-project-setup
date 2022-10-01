import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => (
    <main>
        <nav>Navigation</nav>
        <Outlet />
        <footer>Footer</footer>
    </main>
);

export default Layout;
