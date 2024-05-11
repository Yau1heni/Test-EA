import styles from './footer.module.scss'
import {Modal} from "@/components/ui/modal/modal";
import {FormInput} from "@/components/ui/form-input/form-input";
import {useModal} from "@/hooks/use-modal";

export const Footer = () => {
    const {modalText, modalTitle, openErrorModal, openSuccessModal, isModalOpen, closeModal} = useModal()

    return (
        <div className={styles.footer}>
            <FormInput onSuccess={openSuccessModal} onError={openErrorModal}/>
            <Modal title={modalTitle} text={modalText} isOpen={isModalOpen} onClose={closeModal}/>
        </div>
    )
}
