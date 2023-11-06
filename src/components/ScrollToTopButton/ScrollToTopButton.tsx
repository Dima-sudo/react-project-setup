import React from 'react';

interface IProps {
    isButtonVisible: boolean;
}

const ScrollToTopButton: React.FC<IProps> = ({ isButtonVisible, ...rest }) => {
    // @ts-ignore
    const onClickTop = (event) => {
        event.preventDefault();

        const targetId = 'back-to-top-anchor';
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return isButtonVisible ? (
        <button
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
            }}
            type="button"
            onClick={onClickTop}
            {...rest}
        >
            TO TOP
        </button>
    ) : null;
};

export default ScrollToTopButton;
