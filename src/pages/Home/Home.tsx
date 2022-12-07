import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './Home.style';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('homePage')}

            <S.Button>Button</S.Button>
        </div>
    );
};

export default Home;
