import React, { useEffect, useState } from 'react';
import _ from 'lodash';

interface ScrollPosition {
    x: number;
    y: number;
}

export const useScrollPosition = (
    containerRef: React.RefObject<HTMLElement>
) => {
    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
        x: 0,
        y: 0,
    });
    const THROTTLE_SCROLL_EVENT = 500;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = _.throttle(() => {
            setScrollPosition({
                x: container.scrollLeft,
                y: container.scrollTop,
            });
        }, THROTTLE_SCROLL_EVENT);

        container.addEventListener('scroll', handleScroll);

        // eslint-disable-next-line consistent-return
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [containerRef]);

    return scrollPosition;
};
