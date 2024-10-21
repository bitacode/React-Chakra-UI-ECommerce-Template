// 1680 above
// 1679 - 1408
// 1407 - 1025
// 1024 - 768
// 767 below

import { useState, useEffect } from 'react';

const getScreenSize = () => {
    const width = window.innerWidth;

    if (width >= 1680) {
        return 'extraLarge';
    } if (width >= 1408 && width <= 1879) {
        return 'large'
    } if (width >= 1175 && width <= 1407) {
        return 'medium'
    } if (width >= 995 && width <= 1174) {
        return 'small'
    } if (width >= 900 && width <= 994) {
        return 'extraSmall'
    } else {
        return 'mobile'
    }
}

export function useScreenSize() {
    const [screenSize, setScreenSize] = useState(getScreenSize());

    useEffect(() => {
        const onResize = () => {
            setScreenSize(getScreenSize());
        }

       window.addEventListener('resize', onResize);

       return() => {
            window.removeEventListener('resize', onResize);
       }
       
    }, []);

    return screenSize;
}