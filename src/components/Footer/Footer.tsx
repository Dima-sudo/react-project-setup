import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './Footer.style';

const Footer = () => {
    const { t } = useTranslation();

    const footer = {
        services: {
            services: t('footer.services.services'),
            auditAndInsurance: t('footer.services.auditAndInsurance'),
            consulting: t('footer.services.consulting'),
            riskAdvisory: t('footer.services.riskAdvisory'),
            financialAdvisory: t('footer.services.financialAdvisory'),
            tax: t('footer.services.tax'),
        },
        industries: {
            industries: t('footer.industries.industries'),
            consumerEnergyResources: t(
                'footer.industries.consumerEnergyResources'
            ),
            financialServices: t('footer.industries.financialServices'),
            deloitteCatalyst: t('footer.industries.deloitteCatalyst'),
            governmentAndPublic: t('footer.industries.governmentAndPublic'),
            techMediaTelecommunications: t(
                'footer.industries.techMediaTelecommunications'
            ),
            lifeSciencesAndHealth: t('footer.industries.lifeSciencesAndHealth'),
        },
        aboutDeloitte: {
            aboutDeloitteIsrael: t('footer.aboutDeloitte.aboutDeloitteIsrael'),
            careers: t('footer.aboutDeloitte.careers'),
            about: t('footer.aboutDeloitte.about'),
        },
        disclaimer: {
            paragraph1: t('footer.disclaimer.paragraph1'),
            paragraph2: t('footer.disclaimer.paragraph2'),
            rightsReserved: t('footer.disclaimer.rightsReserved'),
        },
    };

    return (
        <S.FooterContainer>
            <S.LinksContainer>
                <S.Column>
                    {Object.values(footer.services).map(
                        (serviceName: string) => (
                            <S.FooterItem key={serviceName}>
                                {serviceName}
                            </S.FooterItem>
                        )
                    )}
                </S.Column>
                <S.Column>
                    {Object.values(footer.industries).map(
                        (serviceName: string) => (
                            <S.FooterItem key={serviceName}>
                                {serviceName}
                            </S.FooterItem>
                        )
                    )}
                </S.Column>
                <S.Column>
                    {Object.values(footer.aboutDeloitte).map(
                        (serviceName: string) => (
                            <S.FooterItem key={serviceName}>
                                {serviceName}
                            </S.FooterItem>
                        )
                    )}
                </S.Column>
            </S.LinksContainer>
            <S.DisclaimerContainer>
                {Object.values(footer.disclaimer).map((paragraph: string) => (
                    <S.DisclaimerParagraph key={paragraph.slice(0, 10)}>
                        {paragraph}
                    </S.DisclaimerParagraph>
                ))}
            </S.DisclaimerContainer>
        </S.FooterContainer>
    );
};

export default Footer;
