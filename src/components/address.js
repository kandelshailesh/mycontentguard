import React from 'react';
import './address.css';
export default function Family_Member() {
  return (
    <form className='addressform'>
      <div className='addressform__currentaddress'>
        <label>Current Address</label>
        <p>
          <input name='fullname' type='text'></input>
        </p>
      </div>
      <div className='addressform__pastaddress1'>
        <label>Past or Alternate Address</label>
        <p>
          <input name='fullname' type='text'></input>
        </p>
      </div>
      <div className='addressform__pastaddress2'>
        <label>Add Another Alernate Address</label>
        <p>
          <input name='fullname' type='checkbox'></input>
        </p>
      </div>
      <div className='addressform__pastaddress2'>
        <label>Past or Alternate Address</label>
        <p>
          <input name='fullname' type='text'></input>
        </p>
      </div>
      <div className='addressform__pastaddress3'>
        <label>Add Another Alernate Address</label>
        <p>
          <input name='fullname' type='checkbox'></input>
        </p>
      </div>
      <div className='addressform__pastaddress3'>
        <label>Past or Alternate Address</label>
        <p>
          <input name='fullname' type='text'></input>
        </p>
      </div>
    </form>
  );
}
