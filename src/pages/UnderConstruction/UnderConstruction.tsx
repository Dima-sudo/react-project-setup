import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './UnderConstruction.style';
import SvgIcon from '../../components/SvgIcon/SvgIcon';
import { IconNamesEnum } from '../../components/SvgIcon/SvgIcon.constants';

const UnderConstruction = () => {
    const { t } = useTranslation();
    return (
        <S.PageContainer>
            <S.PageTitle>{t('underConstruction.title')}</S.PageTitle>
            <S.Text>{t('underConstruction.text')}</S.Text>

            <SvgIcon
                iconName={IconNamesEnum.UNDER_CONSTRUCTION_LOGO}
                height="30rem"
                width="30rem"
            />
        </S.PageContainer>
    );
};

export default UnderConstruction;
