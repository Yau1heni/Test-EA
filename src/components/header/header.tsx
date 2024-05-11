import styles from './header.module.scss'
import Logo from '@/assets/logo.svg?react';

export const Header = () => {
    return (
        <header className={styles.header}>
            <a href="#" onClick={e => e.preventDefault()}>
                <Logo className={styles.headerIcon}/>
            </a>
        </header>
    );
};
