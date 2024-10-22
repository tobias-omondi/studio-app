import React, { useState } from 'react';
import "./Message.css";
import Footer from './Footer';
import {motion} from "framer-motion";



const messageCaption = [
    {
        messageHeading: "EMBA ONE STUDIO"
    },
    {
        message: "We're so glad you found us! Whether you're here to explore our services, check out what’s new, or simply curious about what we do, we’re excited to connect with you. 💬 Got questions, ideas, or just want to say hello? We'd love to hear from you! We’re always happy to share more about what we offer and how we can help. Stay in touch and let’s keep this conversation going!"
    },
];

const Message = () => {
    // State to hold form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your form submission logic here (e.g., sending data to an API)
        console.log("Form submitted:", formData);
        // Optionally, reset the form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
        <div className="message-container">
        <div className="message-heading">
            {messageCaption.map((item, index) => (
                <div key={index} className="message-item">
                    {item.messageHeading && <h2 className="message-heading">{item.messageHeading}</h2>}
                    {item.message && <p className="message-text">{item.message}</p>}
                </div>
            ))}
             </div>
            <div className='message-inputs'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Name:'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='email:'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        id='message'
                        name='message'
                        placeholder='Message:'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <motion.button
                     type='submit' className='btn-message'
                    initial = {{opacity: 0, scale: 0.8}}
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }} 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}>Send Message 
                    </motion.button>
                </form>
        </div>
        </div>
        <Footer />
        </>
    );
}

export default Message;
