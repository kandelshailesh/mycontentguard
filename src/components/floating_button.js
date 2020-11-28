import React from 'react';

export default function Floating_Button({ setsupport }) {
  return (
    <button
      onClick={() => setsupport(prev => !prev)}
      className='floating_button'
    >
      <i className='fa fa-question-circle'></i>
      <label>Support</label>
    </button>
  );
}
