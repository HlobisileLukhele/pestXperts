import React from 'react';
import ContactForm from "../components/ContactForm.jsx"
import FAQs from "../components/FAQs.jsx"

function Contact() {
  return (
    <div>
      <h1 className='flex items-center justify-center text-3xl font-bold p-8'>Contact Us</h1>
      <ContactForm />
      <FAQs />
    </div>
  );
}

export default Contact;