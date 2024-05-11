import styles from './main-content.module.scss'
import {Button} from "@/components/ui/buttom/button";
import {Timer} from "@/components/timer/timer";

export const MainContent = () => {
    const handleClick = () => {
        window.open(import.meta.env.VITE_EXTERNAL_URL, '_blank');
    };

    return (
        <main className={styles.mainContent}>
            <h2 className={styles.title}>Under Construction</h2>
            <div className={styles.textContainer}>
                <p className={styles.text}>We're making lots of improvements and will be back soon</p>
            </div>
            <Timer/>
            <p className={styles.text}>Check our event page when you wait:</p>
            <Button onClick={handleClick} className={styles.button}>Go to the event</Button>
        </main>
    );
};
