import React from 'react';
import ContactForm from "../components/ContactForm.jsx"

function Contact() {
  return (
    <div>
      <h1 className='flex items-center justify-center text-3xl font-bold p-8'>Contact Us</h1>
      <ContactForm />
    </div>
  );
}

export default Contact;