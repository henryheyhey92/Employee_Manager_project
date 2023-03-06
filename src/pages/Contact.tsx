import React from 'react';

interface ContactProps {}

const Contact: React.FC<ContactProps> = (props) => {
    return (
        <div>
            <h1>Contact us</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8270348486285!2d103.84497204974986!3d1.2772309621570896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da191255b0653d%3A0x6813ce0f87a3d50c!2sGIC%20Private%20Limited!5e0!3m2!1sen!2ssg!4v1678106971429!5m2!1sen!2ssg"
                    width="600"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
