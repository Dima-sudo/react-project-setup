import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
// eslint-disable-next-line import/no-cycle
import { useRoutes } from '../../root/hooks/useRoutes';

const Home = () => {
    const { RoutesEnum } = useRoutes();
    const navigate = useNavigate();

    useEffect(() => {
        navigate(RoutesEnum.DOCUMENT);
    }, [RoutesEnum.DOCUMENT, navigate]);

    return <div />;
};

export default Home;
