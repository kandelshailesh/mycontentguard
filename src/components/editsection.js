import React, { useState, useEffect, useContext } from 'react';
import { Dropdown, Menu, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Submit_Removals from './submit_removal';
import { axiosInstance } from '../utils/axiosInstance';
import getUserID from '../utils/getUserID';
import { isNaN } from 'formik';
import { MCG } from '../index';
import { getMember } from './get_member';

export default function EditSection() {
  const [title, settitle] = useState('DASHBOARD');
  const [visible, setvisible] = useState(false);
  const [name, setname] = useState('');
  const { permission_level, user_id } = useContext(MCG);
  useEffect(() => {
    if (!isNaN(user_id)) {
      axiosInstance
        .get(`/api/client/${user_id}`)
        .then(response => {
          console.log(response);
          if (response.data.success) {
            setname(response.data.data.name);
          } else {
            message.error('Error fetching data');
          }
        })
        .catch(err => {
          console.log(err);
          message.error('Error fetching data');
        });
    }
  });

  const handleVisibleChange = () => {
    setvisible(!visible);
  };
  const handleMenuClick = e => {
    settitle(e.key);

    switch (e.key) {
      case 'DASHBOARD':
        break;
      case 'EDIT ACCOUNT':
        window.location.href =
          'https://mycontentguard.com/user-profile/edit-account/';
        break;
      case 'MY SUBSCRIPTION':
        window.location.href =
          'https://mycontentguard.com/user-profile/my-subscriptions/';
        break;
      case 'PAYMENT METHODS':
        window.location.href =
          'https://mycontentguard.com/user-profile/payment-methods/';
        break;
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='DASHBOARD'>DASHBOARD</Menu.Item>
      <Menu.Item key='EDIT ACCOUNT'>EDIT ACCOUNT</Menu.Item>
      <Menu.Item key='MY SUBSCRIPTION'>MY SUBSCRIPTION</Menu.Item>
      <Menu.Item key='PAYMENT METHODS'>PAYMENT METHODS</Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className='editsection'>
        <div className='editsection__username'>
          <p>{name}</p>
        </div>
        <div className='editsection__logout'>
          <button
            onClick={() =>
              (window.location.href =
                'https://mycontentguard.com/user-profile/customer-logout/?_wpnonce=20a6db582e')
            }
          >
            LOGOUT
          </button>
        </div>
        <Dropdown
          className='editsection__dropdown'
          overlay={menu}
          onVisibleChange={handleVisibleChange}
          visible={visible}
        >
          <a
            className='ant-dropdown-link dropdown__title'
            onClick={e => e.preventDefault()}
          >
            {title} <DownOutlined />
          </a>
        </Dropdown>
        <hr />
        <div className='submit_removal'>
          <div className='submit_removal__left'>
            <p className='left__heading1'>Welcome!</p>
            <p className='left__heading2'>
              Let's get started with the removal process!
            </p>
            <p className='left__heading3'>
              Click on the button below to submit the required information that
              we need in order for us to begin the removal process. Depending on
              the protection plan that you purchased, you may have a button or
              multiple buttons to click on in order to take you to submit the
              information for you and everyone else in your chosen protection
              plan. *Each covered person has their own respective button and
              separate submission form.*
            </p>
            <div className='left__buttonlist'>
              <Link
                to={{
                  pathname: '/removal-pages/user-info/',
                  state: {
                    value: 'Main User Info',
                  },
                }}
              >
                <button>Submit Your Removal Info</button>
              </Link>

              {getMember(permission_level)}
              {/* <Link
                to={{
                  pathname: '/removal-pages/family-member-1/',
                  state: {
                    value: 'Family Member#1',
                  },
                }}
              >
                <button>Submit Family Member #1</button>
              </Link>
              <Link
                to={{
                  pathname: '/removal-pages/family-member-2/',
                  state: {
                    value: 'Family Member#2',
                  },
                }}
              >
                <button>Submit Family Member #2</button>
              </Link>
              <Link
                to={{
                  pathname: '/removal-pages/family-member-3/',
                  state: {
                    value: 'Family Member#3',
                  },
                }}
              >
                <button>Submit Family Member #3</button>
              </Link> */}
              <Link to='/removal-pages/additional-information/'>
                <button className='buttonlist__additional'>
                  Add Additional Removals
                </button>
              </Link>
              <Link to='/'>
                <button className='buttonlist__family'>
                  Add A Family Member <br /> ONLY $48
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
