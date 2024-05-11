import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react'
import styles from './button.module.scss'
import Arrow from '@/assets/arrow-back.svg?react';

type DefaultButtonPropsType = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export const Button: FC<DefaultButtonPropsType> = props => {
    const {children, ...restProps} = props

    return (
        <button {...restProps}>
            <div className={styles.buttonContainer}>
                {children}
                <Arrow className={styles.iconButton}/>
            </div>
        </button>
    )
}
