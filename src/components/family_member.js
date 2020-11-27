import React from 'react';
import { Formik, Field, Form } from 'formik';
export default function Family_Member() {
  return (
    <div className='memberform'>
      <div className='memberform__fullname'>
        <label>Full Name</label>
        <p>
          <Field name='name' type='text'></Field>
        </p>
      </div>
      <div className='memberform__nickname'>
        <label>Nicknames, Aliases or Alternate Names</label>
        <p>
          <Field name='nickname' type='text'></Field>
          <span>
            Do you go by other names, such as abbreviations, or maiden names?
          </span>
        </p>
      </div>
      <div className='memberform__mainemail'>
        <label>Main Email</label>
        <p>
          <Field name='current_email' type='text'></Field>
        </p>
      </div>
      <div className='memberform__altemail'>
        <label>Alternate Emails</label>
        <p>
          <Field name='past_emails' type='text'></Field>
          <span>Separate by commas</span>
        </p>
      </div>
      <div className='memberform__gender'>
        <label>Gender</label>
        <p className='gender__checkbox'>
          <Field name='gender' value='Male' type='radio'></Field>Male
          <Field name='gender' value='Female' type='radio'></Field>Female
        </p>
      </div>
      <div className='memberform__dob'>
        <label>Date of Birth</label>
        <p>
          <Field name='birthdate' type='date'></Field>
        </p>
      </div>
    </div>
  );
}
