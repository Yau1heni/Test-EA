import {FC} from 'react';
import styles from './timer-item.module.scss'
import {TimerLogoSvg} from "@/components/timer/timer-logo-svg/timer-logo-svg";

export const TimerItem: FC<TimerItemProps> = ({text, value}) => {
    return (
        <div className={styles.timerItem}>
            <h3 className={styles.value}>{value}</h3>
            <TimerLogoSvg text={text}/>
        </div>
    );
};

type TimerItemProps = {
    text: string;
    value: number;
}