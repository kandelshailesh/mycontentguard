import React from 'react';
import './phone.css';
export default function Family_Member() {
  return (
    <form className='phoneform'>
      <div className='phoneform__main'>
        <label>Main Phone Number</label>
        <p>
          <input name='fullname' type='tel'></input>
        </p>
      </div>
      <div className='phoneform__addalternate1'>
        <label>Add Additional Phone Number(s)</label>
        <p>
          <input name='fullname' type='checkbox'></input>
        </p>
      </div>
      <div className='phoneform__alternate1'>
        <label>Other Phone Number(s)</label>
        <p>
          <input name='fullname' type='tel'></input>
        </p>
      </div>
      <div className='phoneform__addalternate2'>
        <label>Add Additional Phone Number(s)</label>
        <p>
          <input name='fullname' type='checkbox'></input>
        </p>
      </div>
      <div className='phoneform__alternate2'>
        <label>Other Phone Number(s)</label>
        <p>
          <input name='fullname' type='tel'></input>
        </p>
      </div>
    </form>
  );
}
