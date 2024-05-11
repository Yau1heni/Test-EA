import React from 'react';
import {Portal} from "@/components/ui/portal/portal";
import Close from '@/assets/close.svg?react';
import styles from './modal.module.scss'

type ModalProps = {
    title: string;
    text: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({isOpen, onClose, text, title}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <span className={styles.close} onClick={onClose}>
                        <Close/>
                    </span>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>{text}</p>
                    <button className={styles.button} onClick={onClose}>Close</button>
                </div>
            </div>
        </Portal>
    );
};
