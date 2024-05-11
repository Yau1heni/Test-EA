import figureLeft from '@/assets/image/figure-left.png'
import figureRight from '@/assets/image/figure-right.png'
import styles from './figure-component.module.scss'

export const FigureComponent = () => {

    return (
        <>
            <div className={styles.figureLeft}>
                <img width={'100%'} height={'100%'} src={figureLeft} alt={'figure'}/>
            </div>
            <div className={styles.figureRight}>
                <img width={'100%'} height={'100%'} src={figureRight} alt={'figure'}/>
            </div>
        </>
    );
};
