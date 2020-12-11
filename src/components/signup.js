import React, { useState, useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { message } from 'antd';
import * as Yup from 'yup';
import { axiosInstance } from '../utils/axiosInstance';
import { MCG } from '../index';
import { Redirect, Link } from 'react-router-dom';
import store from 'store';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Plese enter valid email')
    .required('Please enter this field'),
  password: Yup.string().min(8).required('Please enter this field'),
});
export default function Signup(props) {
  const { history } = props;
  const [signuperror, setsignuperror] = useState(false);
  const { status } = React.useContext(MCG);
  const { errormessage, seterromessage } = useState('');

  if (status) {
    return <Redirect to='/'></Redirect>;
  }
  const signup_submit = values => {
    console.log(values);

    axiosInstance
      .post('/api/auth', values)
      .then(response => {
        const { success, msg } = response.data;
        // alert(success);
        if (success) {
          setsignuperror(false);
          message.success('Registered Successfully');
          window.location.href = '/';
        } else {
          message.error(msg);
          setsignuperror(true);
        }
      })
      .catch(err => {
        console.log(err);
        message.error(err);
        setsignuperror(true);
      });
  };
  return (
    <div className='signup'>
      <div className='signup__left'>
        <p className='left__heading1'>
          Take <span>control</span> of your <span>digital privacy.</span>
        </p>
        <p className='left__heading2'>
          Keep you and your loved ones' personal information safe and private
          online with myContentGuard.
        </p>
      </div>
      <div className='signup__right'>
        <div className='right__card'>
          <div className='card__heading'>Signup</div>

          <Formik
            enableReinitialize={true}
            initialValues={{ email: '', password: '' }}
            onSubmit={signup_submit}
            validationSchema={SignupSchema}
          >
            {({ errors, touched }) => (
              <Form className='card__body'>
                {signuperror && (
                  <div
                    style={{
                      color: 'red',
                      marginBottom: 10,
                      textAlign: 'center',
                    }}
                  >
                    {errormessage}
                  </div>
                )}
                <Field
                  placeholder='Emai Address'
                  type='text'
                  name='email'
                ></Field>
                {errors.email && touched.email && <div>{errors.email}</div>}
                <br />
                <Field
                  placeholder='Password'
                  type='password'
                  name='password'
                ></Field>
                {errors.password && touched.password && (
                  <div>{errors.password}</div>
                )}
                <br />
                {/* <label className='rememberme'>
                  <Field type='checkbox' name='remember_me'></Field>
                  &nbsp; Remember Me
                </label> */}
                {/* <br /> */}
                <button className='signupbtn' type='submit'>
                  Create Account
                </button>
                <br />
                <label className='lostpassword'>
                  Lost Password? Click Here
                </label>
                <br />
                <p>
                  Already a member? &nbsp;
                  <span>
                    <Link to='/my-account'>Click Here to Login</Link>
                  </span>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
