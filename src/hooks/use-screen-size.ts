import { useState, useEffect } from 'react';

export const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        widthScreen: window.innerWidth,
        heightScreen: window.innerHeight
    });

    const handleResize = () => {
        setScreenSize({
            widthScreen: window.innerWidth,
            heightScreen: window.innerHeight
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenSize;
};
