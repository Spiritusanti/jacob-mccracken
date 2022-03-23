import { NextPage } from "next";
import ContactForm from "../components/ContactForm";
import SocialMedia from "../components/SocialMedia";

const contact: NextPage = () => {
    return (
        <div>
            <ContactForm />
            <SocialMedia />
        </div>
    )
}

export default contact;