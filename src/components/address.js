import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';

export default function Address({ userinfo, userinfo_name }) {
  const [alternate1, setalternate1] = useState(
    userinfo.past_adresses[0] ? true : false,
  );
  const [alternate2, setalternate2] = useState(
    userinfo.past_adresses[1] ? true : false,
  );
  return (
    <div className='addressform'>
      <div className='addressform__currentaddress'>
        <label>Current Address</label>
        <p>
          <Field
            placeholder='Country'
            name={userinfo_name.country}
            type='text'
          ></Field>
          <Field
            placeholder='State'
            name={userinfo_name.city}
            type='text'
          ></Field>
          <Field
            placeholder='City'
            name={userinfo_name.city}
            type='text'
          ></Field>
          <Field
            placeholder='Street'
            name={userinfo_name.street}
            type='text'
          ></Field>
          <Field
            placeholder='Zip Code'
            name={userinfo_name.zip_code}
            type='text'
          ></Field>
        </p>
      </div>
      {/* <div className='addressform__pastaddress1'>
        <label>Past or Alternate Address</label>
        <p>
          <Field name='fullname' type='text'></Field>
        </p>
      </div> */}
      <div className='addressform__pastaddress2'>
        <label>Add Another Alernate Address</label>
        <p>
          <Field
            onClick={() => setalternate1(!alternate1)}
            checked={userinfo.past_adresses[0]}
            type='checkbox'
          ></Field>
        </p>
      </div>
      {(userinfo.past_adresses[0] || alternate1) && (
        <div className='addressform__pastaddress2'>
          <label>Past or Alternate Address</label>
          <p>
            <Field
              placeholder='Country'
              name={userinfo_name.past_adresses[0].country}
              type='text'
            ></Field>
            <Field
              placeholder='State'
              name={userinfo_name.past_adresses[0].state}
              type='text'
            ></Field>
            <Field
              placeholder='City'
              name={userinfo_name.past_adresses[0].city}
              type='text'
            ></Field>
            <Field
              placeholder='Street'
              name={userinfo_name.past_adresses[0].street}
              type='text'
            ></Field>
            <Field
              placeholder='Zip Code'
              name={userinfo_name.past_adresses[0].zip_code}
              type='text'
            ></Field>
          </p>
        </div>
      )}

      <div className='addressform__pastaddress3'>
        <label>Add Another Alernate Address</label>
        <p>
          <Field
            onClick={() => setalternate2(!alternate2)}
            checked={userinfo.past_adresses[1]}
            type='checkbox'
          ></Field>
        </p>
      </div>
      {(userinfo.past_adresses[1] || alternate2) && (
        <div className='addressform__pastaddress3'>
          <label>Past or Alternate Address</label>
          <p>
            <Field
              placeholder='Country'
              name={userinfo_name.past_adresses[1].country}
              type='text'
            ></Field>
            <Field
              placeholder='State'
              name={userinfo_name.past_adresses[1].state}
              type='text'
            ></Field>
            <Field
              placeholder='City'
              name={userinfo_name.past_adresses[1].city}
              type='text'
            ></Field>
            <Field
              placeholder='Street'
              name={userinfo_name.past_adresses[1].street}
              type='text'
            ></Field>
            <Field
              placeholder='Zip Code'
              name={userinfo_name.past_adresses[1].zip_code}
              type='text'
            ></Field>
          </p>
        </div>
      )}
    </div>
  );
}
