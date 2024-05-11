import {TimerItem} from "@/components/timer/timer-item/timer-item";
import {useCountdown} from "@/hooks/use-count-down";
import styles from './timer.module.scss'
import {useScreenSize} from "@/hooks/use-screen-size";
import {ScreenSize} from "@/constants/screen-size";

export const Timer = () => {
    const {widthScreen} = useScreenSize()
    const isDesktop = widthScreen > ScreenSize.xl
    const countdown = useCountdown(isDesktop)


    return (
        <div className={styles.timer}>
            {countdown.map(({name, value}, index) => (
                <div key={index} className={styles.timerItemContainer}>
                    <TimerItem key={index} value={value} text={name}/>
                    {index !== countdown.length - 1 && <span className={styles.value}>:</span>}
                </div>
            ))}
        </div>
    )
};
