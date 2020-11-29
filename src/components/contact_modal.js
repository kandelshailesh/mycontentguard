import React, { useEffect, useRef } from 'react';

export default function Contact_Modal({ setsupport }) {
  const contact_ref = useRef();
  const handleClick = e => {
    console.log(e.clientX);
    console.log(contact_ref.current.offsetWidth);
    if (e.clientX <= contact_ref.current.offsetWidth) {
      setsupport(false);
    }
  };
  //   useEffect(() => {
  //     window.addEventListener('click', handleClick);
  //     return function () {
  //       window.removeEventListener('click', handleClick);
  //     };
  //   }, []);
  return (
    <div ref={contact_ref} className='contact_modal'>
      <div className='section1'>
        <label>Need help?</label>
        <i onClick={() => setsupport(false)} className='fa fa-times'></i>
      </div>
      <div className='section2'>
        If you need any help or have any questions about how to use your
        account, submit removals, check removals or anything else, just fill out
        the support form below and we will get back to you. You can also call us
        at&nbsp;<a href='tel:8652259998'>(865) 225-9998 </a>or email us at
        &nbsp;
        <a href='mailto:info@mycontentguard.com'>info@mycontentguard.com</a>
      </div>
      <div className='section3'>
        <form className='contact_form'>
          <input type='text' placeholder='Name'></input>
          <input type='email' placeholder='Email'></input>
          <textarea rows='4' placeholder='Message'></textarea>
        </form>
      </div>
      <div className='section4'>
        <button>SUBMIT MESSAGE</button>
      </div>
    </div>
  );
}
