import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.target);

        try {
            const response = await fetch(event.target.action, {
                method: 'POST',
                body: formData,
            });

            console.log('Response Status:', response.status); // Log response status
            const responseData = await response.json(); // Log response body
            console.log('Response:', responseData);

            if (response.ok) {
                setFeedbackMessage('Message sent successfully!');
            } else {
                setFeedbackMessage('Failed to send message. Please try again later.');
            }
        } catch (error) {
            setFeedbackMessage('An error occurred. Please try again later.');
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="flex flex-col items-center justify-center p-8 bg-gray-900">
            <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} className='z-10'>
                <input type="hidden" name="access_key" value="ef16f9f0-1251-4f61-9702-01969ec3d1ca" />
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center text-white mb-6"
                >
                    Contact Us
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-center text-white mb-8"
                >
                    We would love to hear from you! Fill out the form below or visit us at our location.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col md:flex-row w-full max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md"
                >
                    <div className="flex-1 p-4">
                        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                        <form className="flex flex-col">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="mb-4 p-2 border rounded"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="mb-4 p-2 border rounded"
                                required
                            />
                            <textarea
                                rows="4"
                                name="message"
                                placeholder="Your Message"
                                className="mb-4 p-2 border rounded"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className={`bg-blue-500 text-white py-2 rounded hover:bg-blue-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                        {feedbackMessage && (
                            <p className="mt-4 text-center text-green-500">{feedbackMessage}</p>
                        )}
                    </div>
                    <div className="flex-1 p-4">
                        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
                        <div className="w-full h-64">
                            <motion.iframe
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094266!2d144.9556513156829!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f000001%3A0x5045675218ceed30!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1609903360838!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                            ></motion.iframe>
                        </div>
                    </div>
                </motion.div>
            </form>
        </section>
    );
};

export default Contact;
