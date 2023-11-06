import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type AnimationType =
    | 'slideLeft'
    | 'slideRight'
    | 'slideTop'
    | 'slideBottom'
    | 'pop'
    | 'fade';

interface IProps {
    isVisible?: boolean;
    animationType?: AnimationType;
    children: React.ReactNode | React.ReactElement;
    durationSeconds?: number;
    delaySeconds?: number;
}

const Animate: React.FC<IProps> = ({
    isVisible,
    animationType = 'fade',
    children,
    durationSeconds = 0.2,
    delaySeconds = 0,
}) => {
    const uniqueKeyRef = useRef(crypto?.randomUUID?.() || 'animation-key');

    let motionProps;

    switch (animationType) {
        case 'slideLeft':
            motionProps = {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
            };
            break;
        case 'slideRight':
            motionProps = {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: 20 },
            };
            break;
        case 'slideTop':
            motionProps = {
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
            };
            break;
        case 'slideBottom':
            motionProps = {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 20 },
            };
            break;
        case 'pop':
            motionProps = {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.8 },
            };
            break;
        case 'fade':
            motionProps = {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
            };
            break;
        default:
            break;
    }

    return (
        <AnimatePresence mode="sync">
            {isVisible && (
                <motion.div
                    key={uniqueKeyRef.current}
                    {...motionProps}
                    transition={{
                        duration: durationSeconds,
                        delay: delaySeconds,
                    }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Animate;
