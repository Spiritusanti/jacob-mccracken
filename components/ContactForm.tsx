import { FC } from "react";
import styles from '../styles/ContactForm.module.css';

const ContactForm: FC = () => {
    return (
        <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" className={styles.form}>
            <h2>Contact me:</h2>
            <div className={styles.formInputsWrapper} >
                <p className={styles.input}>
                    <label htmlFor="name">Your Name: </label>
                    <input type="text" name="name" id="name" />
                </p>
                <p className={styles.input}>
                    <label htmlFor="email">Your Email: </label>
                    <input type="email" name="email" id="email" />
                </p>
                <p className={styles.input}>
                    <label htmlFor="product">Select Product: </label>
                    <select name="product" id="product">
                        <option value="" disabled={true} selected={true}>- Select Option -</option>
                        <option value="general inquiry">General Inquiry</option>
                        <option value="basic static site">Basic Static Site</option>
                        <option value="single page Application">Single Page Application</option>
                    </select>
                </p>
                <p className={styles.textareaWrapper}>
                    <label htmlFor="message">Message: </label>
                    <textarea cols={50} rows={10} name="message" id="message" />
                </p>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <p className={styles.buttonWrapper}>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}

export default ContactForm;