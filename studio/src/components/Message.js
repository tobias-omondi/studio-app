import React, { useState } from 'react';
import "./Message.css";
import Footer from './Footer';

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
            {messageCaption.map((item, index) => (
                <div key={index} className="message-item">
                    {item.messageHeading && <h2 className="message-heading">{item.messageHeading}</h2>}
                    {item.message && <p className="message-text">{item.message}</p>}
                </div>
            ))}
            <div className='message-inputs'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor='message'>Message:</label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Message;
