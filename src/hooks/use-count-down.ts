import {useState, useEffect, useMemo} from 'react';
import {TARGET_DATE} from "@/constants/date";

type CountdownItem = {
    name: string;
    value: number;
}

export const useCountdown = (isDesktop: boolean): CountdownItem[] => {
    const targetDate = useMemo(() => new Date(TARGET_DATE), []);

    const dayName = isDesktop ? 'Days' : 'DD'
    const hoursName = isDesktop ? 'Hours' : 'HH'
    const minutesName = isDesktop ? 'Minutes' : 'MIN'
    const secondsName = isDesktop ? 'Seconds' : 'SEC'

    const initState = [
        {name: dayName, value: 0},
        {name: hoursName, value: 0},
        {name: minutesName, value: 0},
        {name: secondsName, value: 0}
    ]

    const [countdown, setCountdown] = useState<CountdownItem[]>(initState);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeDifference = targetDate.getTime() - now;

            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                setCountdown([
                    {name: dayName, value: days},
                    {name: hoursName, value: hours},
                    {name: minutesName, value: minutes},
                    {name: secondsName, value: seconds}
                ]);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [targetDate, isDesktop]);

    return countdown;
};
