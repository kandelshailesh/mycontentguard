import React, { useState, useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { message } from 'antd';
import * as Yup from 'yup';
import { axiosInstance } from '../utils/axiosInstance';
import { MCG } from '../index';
import { Redirect } from 'react-router-dom';
import store from 'store';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Please enter this field'),
  password: Yup.string().required('Please enter this field'),
});
export default function Login(props) {
  const { history } = props;
  const [loginerror, setloginerror] = useState(false);
  const { status } = React.useContext(MCG);

  if (status) {
    return <Redirect to='/'></Redirect>;
  }
  const login_submit = values => {
    console.log(values);

    axiosInstance
      .post('/api/login', values)
      .then(response => {
        const { success } = response.data;
        // alert(success);
        if (success) {
          setloginerror(false);
          store.set('token', response.data.data);
          message.success('Login Successfully');
          window.location.href = '/';
        } else {
          message.error('Error occured');
          setloginerror(true);
        }
      })
      .catch(err => {
        console.log(err);
        message.error('Error occured');
        setloginerror(true);
      });
  };
  return (
    <div className='login'>
      <div className='login__left'>
        <p className='left__heading1'>
          Take <span>control</span> of your <span>digital privacy.</span>
        </p>
        <p className='left__heading2'>
          Keep you and your loved ones' personal information safe and private
          online with myContentGuard.
        </p>
      </div>
      <div className='login__right'>
        <div className='right__card'>
          <div className='card__heading'>Login</div>

          <Formik
            enableReinitialize={true}
            initialValues={{ email: '', password: '' }}
            onSubmit={login_submit}
            validationSchema={LoginSchema}
          >
            {({ errors, touched }) => (
              <Form className='card__body'>
                {loginerror && (
                  <div
                    style={{
                      color: 'red',
                      marginBottom: 10,
                      textAlign: 'center',
                    }}
                  >
                    Invalid username or password
                  </div>
                )}
                <Field
                  placeholder='Username or Email Address'
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
                <label className='rememberme'>
                  <Field type='checkbox' name='remember_me'></Field>
                  &nbsp; Remember Me
                </label>
                <br />
                <button className='loginbtn' type='submit'>
                  Log In
                </button>
                <br />
                <label className='lostpassword'>
                  Lost Password? Click Here
                </label>
                <br />
                <p>
                  Not a member yet? <span>Click Here to sign up</span>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
