import {FC, FormEvent, useState} from 'react'
import styles from './form-input.module.scss'
import {Button} from "@/components/ui/buttom/button";
import {sendData} from "@/services/send-email";
import {emailPattern} from "@/constants/pattern";

export const FormInput: FC<FormInputType> = ({onSuccess, onError}) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        sendData<unknown>(import.meta.env.VITE_URL, email)
            .then(() => {
                onSuccess();
            })
            .catch(error => {
                console.log(error);
                onError()
            });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.inputText}>
            <input className={styles.input}
                   placeholder={'Enter your Email and get notified'}
                   type="email"
                   name="email"
                   pattern={emailPattern}
                   required
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}/>
            <Button className={styles.button}/>
        </form>
    )
}

type FormInputType = {
    onSuccess: () => void
    onError: () => void
}

