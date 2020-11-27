import React, { useState, useEffect } from 'react';
import './phone.css';
import { Formik, Field, Form } from 'formik';

export default function Family_Member({ userinfo }) {
  const [alternate1, setalternate1] = useState(
    userinfo.past_phones[0] ? true : false,
  );
  const [alternate2, setalternate2] = useState(
    userinfo.past_phones[1] ? true : false,
  );
  return (
    <div className='phoneform'>
      <div className='phoneform__main'>
        <label>Main Phone Number</label>
        <p>
          <Field name='current_phone' type='tel'></Field>
        </p>
      </div>
      <div className='phoneform__addalternate1'>
        <label>Add Additional Phone Number(s)</label>
        <p>
          <Field
            onClick={() => setalternate1(!alternate1)}
            checked={userinfo.past_phones[0]}
            type='checkbox'
          ></Field>
        </p>
      </div>
      {(userinfo.past_phones[0] || alternate1) && (
        <div className='phoneform__alternate1'>
          <label>Other Phone Number(s)</label>
          <p>
            <Field name='past_phones[0].phone' type='tel'></Field>
          </p>
        </div>
      )}
      <div className='phoneform__addalternate2'>
        <label>Add Additional Phone Number(s)</label>
        <p>
          <Field
            onClick={() => setalternate2(!alternate2)}
            checked={userinfo.past_phones[1]}
            type='checkbox'
          ></Field>
        </p>
      </div>
      {(userinfo.past_phones[1] || alternate2) && (
        <div className='phoneform__alternate2'>
          <label>Other Phone Number(s)</label>
          <p>
            <Field name='past_phones[1].phone' type='tel'></Field>
          </p>
        </div>
      )}
    </div>
  );
}
