import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';

export default function Address({ userinfo, userinfo_name }) {
  const [alternate1, setalternate1] = useState(false);
  const [alternate2, setalternate2] = useState(false);

  useEffect(() => {
    if (userinfo_name.name === 'name') {
      setalternate1(() => {
        try {
          if (userinfo.past_adresses[0] !== undefined) return true;
        } catch (e) {
          return false;
        }
      });
      setalternate2(() => {
        try {
          if (userinfo.past_adresses[1] !== undefined) return true;
        } catch (e) {
          return false;
        }
      });
    } else {
      const index = userinfo_name.name.split('[')[1].split('')[0];
      // alert(index);
      if (userinfo.relatives[index]) {
        setalternate1(() => {
          try {
            if (userinfo.relatives[index].past_adresses[0] !== undefined)
              return true;
          } catch (e) {
            return false;
          }
        });
        setalternate2(() => {
          try {
            if (userinfo.relatives[index].past_adresses[1] !== undefined)
              return true;
          } catch (e) {
            return false;
          }
        });
        // setalternate1(
        //   userinfo.relatives[index].past_adresses[0] !== undefined
        //     ? true
        //     : false,
        // );
        // setalternate2(
        //   userinfo.relatives[index].past_adresses[1] !== undefined
        //     ? true
        //     : false,
        // );
      } else {
        setalternate1(false);
        setalternate2(false);
      }
    }
  }, []);

  return (
    <div className='addressform'>
      <div className='addressform__currentaddress'>
        <label>Current Address</label>
        <p>
          <Field
            placeholder='Country'
            name={userinfo_name.current_address.country}
            type='text'
          ></Field>
          <Field
            placeholder='State'
            name={userinfo_name.current_address.state}
            type='text'
          ></Field>
          <Field
            placeholder='City'
            name={userinfo_name.current_address.city}
            type='text'
          ></Field>
          <Field
            placeholder='Street'
            name={userinfo_name.current_address.street}
            type='text'
          ></Field>
          <Field
            placeholder='Zip Code'
            name={userinfo_name.current_address.zip_code}
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
            checked={alternate1}
            type='checkbox'
          ></Field>
        </p>
      </div>
      {alternate1 && (
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
            checked={alternate2}
            type='checkbox'
          ></Field>
        </p>
      </div>
      {alternate2 && (
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
