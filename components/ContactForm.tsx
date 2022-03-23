import { FC } from "react";

const ContactForm: FC = () => {
    return (
        <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Message: <textarea name="message" /></label>
            </p>
            <div data-netlify-recaptcha="true"></div>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}

export default ContactForm;