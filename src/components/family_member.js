import React from 'react';
import './family_member.css';
export default function Family_Member() {
  return (
    <form className='memberform'>
      <div className='memberform__fullname'>
        <label>Full Name</label>
        <p>
          <input name='fullname' type='text'></input>
        </p>
      </div>
      <div className='memberform__nickname'>
        <label>Nicknames, Aliases or Alternate Names</label>
        <p>
          <input name='fullname' type='text'></input>

          <span>
            Do you go by other names, such as abbreviations, or maiden names?
          </span>
        </p>
      </div>
      <div className='memberform__mainemail'>
        <label>Main Email</label>
        <p>
          <input name='fullname' type='text'></input>
        </p>
      </div>
      <div className='memberform__altemail'>
        <label>Alternate Emails</label>
        <p>
          <input name='fullname' type='text'></input>
          <span>Separate by commas</span>
        </p>
      </div>
      <div className='memberform__gender'>
        <label>Gender</label>
        <p className='gender__checkbox'>
          <input name='gender' type='radio'></input>Male
          <input name='gender' type='radio'></input>Female
        </p>
      </div>
      <div className='memberform__dob'>
        <label>Date of Birth</label>
        <p>
          <input name='gender' type='date'></input>
        </p>
      </div>
    </form>
  );
}
