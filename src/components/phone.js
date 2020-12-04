import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';

export default function Phone({ userinfo, userinfo_name }) {
  const [alternate1, setalternate1] = useState(false);
  const [alternate2, setalternate2] = useState(false);

  useEffect(() => {
    if (userinfo_name.name === 'name') {
      setalternate1(userinfo.past_phones[0] !== undefined ? true : false);

      setalternate2(userinfo.past_phones[1] !== undefined ? true : false);
    } else {
      const index = userinfo_name.name.split('[')[1].split('')[0];
      // alert(index);
      if (userinfo.relatives[index]) {
        setalternate1(
          userinfo.relatives[index].past_phones[0] !== undefined ? true : false,
        );
        setalternate2(
          userinfo.relatives[index].past_phones[1] !== undefined ? true : false,
        );
      } else {
        setalternate1(false);
        setalternate2(false);
      }
    }
  }, []);

  return (
    <div className='phoneform'>
      <div className='phoneform__main'>
        <label>Main Phone Number</label>
        <p>
          <Field name={userinfo_name.current_phone} type='tel'></Field>
        </p>
      </div>
      <div className='phoneform__addalternate1'>
        <label>Add Additional Phone Number(s)</label>
        <p>
          <Field
            onClick={() => setalternate1(!alternate1)}
            checked={alternate1}
            type='checkbox'
          ></Field>
        </p>
      </div>
      {alternate1 && (
        <div className='phoneform__alternate1'>
          <label>Other Phone Number(s)</label>
          <p>
            <Field name={userinfo_name.past_phones[0]} type='tel'></Field>
          </p>
        </div>
      )}
      <div className='phoneform__addalternate2'>
        <label>Add Additional Phone Number(s)</label>
        <p>
          <Field
            onClick={() => setalternate2(!alternate2)}
            checked={alternate2}
            type='checkbox'
          ></Field>
        </p>
      </div>
      {alternate2 && (
        <div className='phoneform__alternate2'>
          <label>Other Phone Number(s)</label>
          <p>
            <Field name={userinfo_name.past_phones[1]} type='tel'></Field>
          </p>
        </div>
      )}
    </div>
  );
}
