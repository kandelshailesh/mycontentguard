import React, { useEffect, useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './removal_page.css';
import { Tabs } from 'antd';
import Family_Member from './family_member';
import Address from './address';
import Phone from './phone';

const { TabPane } = Tabs;
export default function Removal_Page(props) {
  const [firsttab, setFirstTab] = useState('');
  const tablist = {
    'user-info': 'Main User Info',
    'family-member-1': 'Family Member#1',
    'family-member-2': 'Family Member#2',
    'family-member-3': 'Family Member#3',
  };
  useEffect(() => {
    console.log(props);
    if (props.location.state) {
      const { value } = props.location.state;
      setFirstTab(value);
    } else {
      setFirstTab(tablist[props.match.params.value]);
    }
  }, []);
  return (
    <>
      <div className='removal_page'>
        <div className='removal_page__left'>
          <p className='left__heading1'>
            <Link to='/'>
              <button>
                <ArrowLeftOutlined
                  style={{ color: 'white', fontWeight: 'bold', marginRight: 5 }}
                />
                Back to Main Page
              </button>
            </Link>
          </p>
          <p className='left__heading2'>Submit your info for removal</p>
          <p className='left__heading3'>
            Let us know below what information you want us to remove for the
            first additional person in your protection plan. Press update when
            ready to submit removals. You can add and update information
            whenever needed.
          </p>
          <div className='left__form'>
            <div class='form__tabs'>
              <Tabs type='card' size='large'>
                <TabPane tab={firsttab} key='1'>
                  <Family_Member />
                </TabPane>
                <TabPane tab='Addresses' key='2'>
                  <Address />
                </TabPane>
                <TabPane tab='Phone Numbers' key='3'>
                  <Phone />
                </TabPane>
              </Tabs>
            </div>
            <button>Submit</button>
          </div>
        </div>
        <div className='removal_page__right'>
          <div className='right__info'>
            <p className='info__heading1'>Why all this info?</p>
            <p className='info__heading2'>
              The more info that you provide, the more myContentGuard can find
              and remove for you. <br />
              <br />
              Most of the time we can remove your info from the data brokers
              with just your name, address, phone number, but some data brokers
              may require your birthday or a copy of your ID which you can
              upload here.
            </p>
          </div>
          <div className='right__family'>
            <Link to='/'>
              <button className='buttonlist__family'>
                Add A Family Member <br /> ONLY $48
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
