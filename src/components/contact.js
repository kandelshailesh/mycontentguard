import React, { useEffect } from 'react';
import { Formik, Field, Form } from 'formik';

export default function Contact__Main() {
  useEffect(() => {
    document.title = 'Contact | myContentGuard';
  }, []);

  return (
    <div className='contact'>
      <div className='contact__main'>
        <div className='contact__main__heading1'>
          <label>Contact Us</label>
        </div>
        <div className='contact__main__heading2'>
          <label>We are always a call, email, or chat away!</label>
        </div>
        <div className='contact__main__heading3'>
          <label>info@mycontentguard.com</label>
        </div>

        <div className='contact__main__heading4'>
          <a href='tel:+18652259998'>+1 (865) 225-9998</a>
          <label>Mon-Fri 10am – 8pm EST</label>
        </div>
        <div className='contact__main__heading5'>
          Fill out the contact form below to be connected with your very own
          security account manager. We usually respond back within 24 hours.
        </div>

        <Formik>
          <Form className='contact__main__form'>
            <Field type='text' placeholder='Name'></Field>
            <Field type='email' placeholder='Email'></Field>
            <Field as='textarea' placeholder='Message(Optional)'></Field>
            <button type='button'>SUBMIT INQUIRY</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
