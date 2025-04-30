import './ContactForm.css';
import emailjs from '@emailjs/browser';
import {useRef} from 'react';
import Input from './Input.jsx';


//contact form component
export default function ContactForm() {

    //saves form data as ref
    const form = useRef();
    
    //handles form submit
    const sendEmail = () => {
        emailjs.sendForm(
        'gmail_service',
        'template_yz5gbt9',
        form.current,
        'ZZ8HSpgoDXZ8qO6bh'
        );
    }




    return (
        <>  
             
            <div className="form-container">
                <h2>Get in Touch with Me:</h2>
                    <form className="form" ref={form} onSubmit={sendEmail}>
                        <Input label = "name" type ="text"/>
                        <Input label = "email" type="email"/>
                        <Input label = "message" type="text"/>
                        <button className="form-submit" type="submit">Send Email</button>
                    </form>

            </div>


        </>
    )

}