import './ContactForm.css';
import emailjs from '@emailjs/browser';
import {useState} from 'react';
import Input from './Input.jsx';

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


//contact form component
export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    //handles form submit
    const sendEmail = (e) => {
        e.preventDefault();

        //Check if email is in valid format
        if (!isValidEmail(formData.email)) {
            window.alert("Please enter a correct email format!");
        }
        //if valid, send email
        else {
            console.log("sending email!");

            emailjs.send(
                'gmail_service',             
                'template_yz5gbt9',          
                formData,                    
                'Hr59z37C7JXW3Ecf3'
            )
            .then((result) => {
                console.log('Email sent successfully:', result.text);
            })
            .then(setFormData({
                name: '',
                email: '',
                message: ''
            }))
            .catch((error) => {
                console.error('Email send failed:', error.text);
            })
        }

    }


    const  handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        
        console.log("current form state:\n" + 
                    "name: " + formData.name + "\n" + 
                    "email: " + formData.email + '\n' +
                    "message " + formData.message
        )   
        
    }




    return (
        <>  
             
            <div className="form-container">
                <h2>Get in Touch with Me:</h2>
                    <form className="form" onSubmit={sendEmail}>
                        <Input label = "name" type ="text" onChange={handleChange} value = {formData.name}/>
                        <Input label = "email" type="email" onChange={handleChange} value={formData.email}/>
                        <Input label = "message" type="text" onChange={handleChange} value = {formData.message}/>
                        <button className="form-submit" type="submit">Send Email</button>
                    </form>

            </div>


        </>
    )

}