import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import {
  InfoCircleFilled,
  PlusOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import { Collapse } from 'antd';
import { MCG } from '../App';
import { getMember } from './get_member';

const { Panel } = Collapse;
export default function Submit_Removal() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Submit Removal | myContentGuard';
  }, []);
  const { permission_level } = React.useContext(MCG);

  return (
    <div className='submit_removal'>
      <div className='submit_removal__left'>
        <p className='left__heading1'>Welcome!</p>
        <p className='left__heading2'>
          Let's get started with the removal process!
        </p>
        <p className='left__heading3'>
          Click on the button below to submit the required information that we
          need in order for us to begin the removal process. Depending on the
          protection plan that you purchased, you may have a button or multiple
          buttons to click on in order to take you to submit the information for
          you and everyone else in your chosen protection plan. *Each covered
          person has their own respective button and separate submission form.*
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

          {/* {relatives} */}
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
      <div className='submit_removal__right'>
        <div className='right__viewremoval'>
          <p className='viewremoval__heading1'>Already submitted your info? </p>
          <p className='viewremoval__heading2'>
            Please note that your first removal progress alert usually will show
            up around 7 days after receiving your necessary information
            submitted here.
          </p>
          <Link to='/'>
            <button className='viewremoval__button'>
              View Your Removal Progress
            </button>
          </Link>
        </div>
        <div className='right__scanner'>
          <p className='scanner__heading1'>Dark Web Scanner</p>
          <p className='scanner__heading2'>
            Click below to see if your data has been breached.
          </p>
          <button className='scanner__button'>SCAN NOW</button>
        </div>
        <div className='right__faq'>
          <p className='faq__heading1'>
            <InfoCircleFilled style={{ fontSize: 30, color: '#c61111' }} />
            <br />
            Frequently asked questions
          </p>
          <Collapse
            accordion
            expandIcon={({ isActive }) =>
              !isActive ? (
                <PlusOutlined style={{ fontSize: 18 }} />
              ) : (
                <MinusOutlined style={{ fontSize: 18 }} />
              )
            }
            className='site-collapse-custom-collapse'
          >
            <Panel
              header='How long does the removal process usually take?'
              key='1'
              className='site-collapse-custom-panel'
            >
              <p>
                We submit your removals on your behalf the same day you submit
                your data to us. Depending on the data website, it can take 24
                hours – 14 days for sites to complete the request.
              </p>
            </Panel>
            <Panel
              header='How do I keep track of my removal results?'
              key='2'
              className='site-collapse-custom-panel'
            >
              <p>
                You can check your members area profile to check the status of
                the removals and view your report. Once all the removals are
                sent, You’ll also receive an email with the report. Note: If
                you’ve just registered with us, it takes several hours for your
                report to generate.
              </p>
            </Panel>
            <Panel
              header='What if I have a question?'
              key='3'
              className='site-collapse-custom-panel'
            >
              <p>
                Just give our support a call at{' '}
                <a href='tel:8652259998'>(865) 225-9998 </a>or email us at
                <a href='mailto:info@mycontentguard.com'>
                  info@mycontentguard.com
                </a>
                and we will be happy to help you.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
}
