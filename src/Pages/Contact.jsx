import React from 'react';
import ContactForm from "../components/ContactForm.jsx";
import FAQS from "../components/FAQS.jsx"; // fixed capitalization

function Contact() {
  return (
    <div>
      <h1 className='flex items-center justify-center text-3xl font-bold p-8'>Contact Us</h1>
      <ContactForm />
      <FAQS />
    </div>
  );
}

export default Contact;
