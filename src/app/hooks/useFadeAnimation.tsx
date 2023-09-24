import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

type AnimationSettings = {
    opacity?: number;
    scale?: number;
    duration?: number;
    ease?: string;
};

type UseFadeInAnimation = (
    targetRef: React.RefObject<HTMLElement>,
    options?: AnimationSettings
) => void;

export const useFadeInAnimation: UseFadeInAnimation = (targetRef, options = {}) => {
    console.log('quantity section is ', targetRef)
    const animationSettings: AnimationSettings = {
        opacity: 0,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        ...options,
    };

    useLayoutEffect(() => {
        if(targetRef) {
            gsap.fromTo(targetRef.current, { ...animationSettings });
        }
    }, [targetRef, animationSettings]);
};

export default useFadeInAnimation;