import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

export default function Addition_Information() {
  useEffect(() => {
    document.title = 'Additional Information | myContentGuard';

    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='additional_information'>
      <div className='additional_information__main'>
        <label className='heading1'>Additional Information</label>
        <label className='heading2'>ADDITIONAL INFORMATION & REMOVALS</label>
        <hr />
        <label className='heading3'>
          In this area you can submit specific websites for removal that contain
          personal information. Please add the exact link to the page that you
          want removed.
        </label>
        <Formik
          initialValues={{ main_url: '', alternate_url: [] }}
          onSubmit={values => alert(JSON.stringify(values, null, 2))}
        >
          {({ values, setvalues }) => (
            <Form className='main__form'>
              <div className='link'>
                <label className='main_url'>
                  Website Address For User Removal
                </label>
                <div className='handle_url'>
                  <Field
                    type='url'
                    className='main_urlinput'
                    name='main_url'
                    placeholder='https://www.example.com/my-personal-info'
                  ></Field>

                  <FieldArray
                    name='alternate_url'
                    className='alternate_url'
                    render={arrayHelpers => (
                      <div className='dynamic_field'>
                        {values.alternate_url &&
                        values.alternate_url.length > 0 ? (
                          values.alternate_url.map((friend, index) => (
                            <div className='dynamic_field__main' key={index}>
                              <Field
                                type='url'
                                className='alternate_url'
                                name={`alternate_url.${index}`}
                                placeholder='https://www.example.com/my-personal-info'
                              />
                              <button
                                type='button'
                                className='minus'
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              >
                                -
                              </button>
                              <button
                                type='button'
                                className='plus'
                                onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                              >
                                +
                              </button>
                            </div>
                          ))
                        ) : (
                          <button
                            type='button'
                            className='add'
                            onClick={() => arrayHelpers.push('')}
                          >
                            {/* show this when user has removed all friends from the list */}
                            Add another website
                          </button>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>
              <div className='link'></div>
              <hr />
              <div className='link'>
                <label className='request'>
                  Additional Comments & Requests
                </label>
                <div className='textarea'>
                  <textarea rows='4'></textarea>
                  <label>
                    Use this area to add additional requests and to add comments
                    or concerns which will be sent to your Account Manager.
                  </label>
                </div>
              </div>
              <button className='submit' type='submit'>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
