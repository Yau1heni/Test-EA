import {useState} from "react";

export const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalText, setModalText] = useState('');

    const openSuccessModal = () => {
        setIsModalOpen(true);
        setModalTitle('SUCCESS!')
        setModalText('You have successfully subscribed to the email newsletter')
    };

    const openErrorModal = () => {
        setIsModalOpen(true);
        setModalTitle('ERROR!')
        setModalText('something went wrong :(')
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return {openSuccessModal, openErrorModal, closeModal, isModalOpen, modalTitle, modalText}
}