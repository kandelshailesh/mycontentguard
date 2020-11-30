import React, { useEffect, useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import Family_Member from './family_member';
import Address from './address';
import Phone from './phone';
import { axiosInstance } from './axiosInstance';
import { Formik, Field, Form } from 'formik';

const { TabPane } = Tabs;
export default function Removal_Page(props) {
  const [firsttab, setFirstTab] = useState(
    props.location.state.value || tablist[props.match.params.value],
  );
  const [userinfo, setUserInfo] = useState('');
  const [userinfo_name, setuserinfo_name] = useState('');
  const nametotab = {
    'Main User Info': 'user-info',
    'Family Member#1': 'family-member-1',
    'Family Member#2': 'family-member-2',
    'Family Member#3': 'family-member-3',
  };
  const tablist = {
    'user-info': 'Main User Info',
    'family-member-1': 'Family Member#1',
    'family-member-2': 'Family Member#2',
    'family-member-3': 'Family Member#3',
  };
  const tabindex = {
    'Family Member#1': 0,
    'Family Member#2': 1,
    'Family Member#3': 2,
  };
  const userform_name = {
    'user-info': {
      name: 'name',
      aliases: 'aliases',
      current_email: 'current_email',
      past_emails: 'past_emails',
      gender: 'gender',
      birthdate: 'birthdate',
      adress: 'adress',
      city: 'city',
      state: 'state',
      zip_code: 'zip_code',
      country: 'country',
      street: 'street',
      current_phone: 'current_phone',
      past_adresses: [
        {
          country: 'past_adresses[0].country',
          state: 'past_adresses[0].state',
          city: 'past_addresses[0].city',
          street: 'past_addresses[0].street',
          zip_code: 'past_adresses[0].zip_code',
        },
        {
          country: 'past_adresses[1].country',
          state: 'past_adresses[1].state',
          city: 'past_addresses[1].city',
          street: 'past_addresses[1].street',
          zip_code: 'past_adresses[1].zip_code',
        },
      ],
      past_phones: ['past_phones[0]', 'past_phones[1]'],
    },
    'family-member-1': {
      name: 'relatives[0].name',
      aliases: 'relatives[0].aliases',
      current_email: 'relatives[0].current_email',
      past_emails: 'relatives[0].past_emails',
      gender: 'relatives[0].gender',
      birthdate: 'relatives[0].birthdate',
      adress: 'relatives[0].adress',
      current_phone: 'relatives[0]current_phone',
      past_adresses: [
        'relatives[0].past_adresses[0]',
        'relatives[0].past_adresses[1]',
      ],
      past_phones: [
        'relatives[0].past_phones[0]',
        'relatvies[0].past_phones[1]',
      ],
    },
    'family-member-2': {
      name: 'relatives[1].name',
      aliases: 'relatives[1].aliases',
      current_email: 'relatives[1].current_email',
      past_emails: 'relatives[1].past_emails',
      gender: 'relatives[1].gender',
      birthdate: 'relatives[1].birthdate',
      adress: 'relatives[1].adress',
      current_phone: 'relatives[1]current_phone',
      past_adresses: [
        'relatives[1].past_adresses[0]',
        'relatives[1].past_adresses[1]',
      ],
      past_phones: [
        'relatives[1].past_phones[0]',
        'relatvies[1].past_phones[1]',
      ],
    },
    'family-member-3': {
      name: 'relatives[2].name',
      aliases: 'relatives[2].aliases',
      current_email: 'relatives[2].current_email',
      past_emails: 'relatives[2].past_emails',
      gender: 'relatives[2].gender',
      birthdate: 'relatives[2].birthdate',
      adress: 'relatives[2].adress',
      current_phone: 'relatives[2]current_phone',
      past_adresses: [
        'relatives[2].past_adresses[0]',
        'relatives[2].past_adresses[1]',
      ],
      past_phones: [
        'relatives[2].past_phones[0]',
        'relatvies[2].past_phones[1]',
      ],
    },
  };

  useEffect(() => {
    if (props.location.state) {
      const { value } = props.location.state;
      setFirstTab(value);
      setuserinfo_name(userform_name[nametotab[value]]);
    } else {
      setFirstTab(tablist[props.match.params.value]);
      setuserinfo_name(userform_name[props.match.params.value]);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    axiosInstance
      .get('/api/client/1')
      .then(data => {
        console.log(data);
        const userinfo_api = data.data.data;
        const birthdate = data.data.data.birthdate;
        console.log('First tab is', firsttab);
        switch (firsttab) {
          case 'Main User Info':
            userinfo_api.birthdate = birthdate
              ? new Date(birthdate).getFullYear() +
                '-' +
                ('0' + (new Date(birthdate).getMonth() + 1)).slice(-2) +
                '-' +
                ('0' + new Date(birthdate).getDate()).slice(-2)
              : '';
            userinfo_api.adress =
              userinfo_api.city +
              ',' +
              userinfo_api.street +
              ',' +
              userinfo_api.state +
              ',' +
              userinfo_api.country;
            userinfo_api.past_adresses.forEach((value, index) => {
              userinfo_api.past_adresses[index] =
                value.city +
                ',' +
                value.street +
                ',' +
                value.state +
                ',' +
                value.country;
            });
            // userinfo_api.past_emails =
            //   userinfo_api.past_emails.length > 0
            //     ? userinfo_api.past_emails.map(result => result.email)
            //     : '';
            break;
          case 'Family Member#1' || 'Family Member #2' || 'Family Member #3':
            // userinfo_api.relatives[tabindex[firsttab]].aliases =
            //   userinfo_api.relatives[tabindex[firsttab]].aliases.length > 0
            //     ? userinfo_api.relatives[tabindex[firsttab]].aliases.toString()
            //     : '';
            userinfo_api.relatives[tabindex[firsttab]].birthdate = userinfo_api
              .relatives[tabindex[firsttab]].birthdate
              ? new Date(
                  userinfo_api.relatives[tabindex[firsttab]].birthdate,
                ).getFullYear() +
                '-' +
                (
                  '0' +
                  (new Date(
                    userinfo_api.relatives[tabindex[firsttab]].birthdate,
                  ).getMonth() +
                    1)
                ).slice(-2) +
                '-' +
                (
                  '0' +
                  new Date(
                    userinfo_api.relatives[tabindex[firsttab]].birthdate,
                  ).getDate()
                ).slice(-2)
              : '';
            userinfo_api.relatives[tabindex[firsttab]].adress =
              userinfo_api.relatives[tabindex[firsttab]].city +
              ',' +
              userinfo_api.relatives[tabindex[firsttab]].street +
              ',' +
              userinfo_api.relatives[tabindex[firsttab]].state +
              ',' +
              userinfo_api.relatives[tabindex[firsttab]].country;
            userinfo_api.relatives[tabindex[firsttab]].past_adresses.forEach(
              (value, index) => {
                userinfo_api.relatives[tabindex[firsttab]].past_adresses[
                  index
                ] =
                  value.city +
                  ',' +
                  value.street +
                  ',' +
                  value.state +
                  ',' +
                  value.country;
              },
            );
            // userinfo_api.relatives[tabindex[firsttab]].past_emails =
            //   userinfo_api.relatives[tabindex[firsttab]].past_emails.length > 0
            //     ? userinfo_api.relatives[tabindex[firsttab]].past_emails.map(
            //         result => result.email,
            //       )
            //     : '';
            break;
        }
        setUserInfo(userinfo_api);
      })
      .catch(err => console.log(err.error));
  }, []);

  const submit_userinfo = values => {
    // await new Promise(resolve => setTimeout(resolve, 500));
    // alert(JSON.stringify(values, null, 2));
    const birthdate = values.birthdate ? values.birthdate.split('-') : '';
    console.log(values);
    values.birthdate = values.birthdate
      ? birthdate[1] + '/' + birthdate[2] + '/' + birthdate[0]
      : '';

    axiosInstance
      .patch('/api/profile-pages/1', {
        client: values,
        confidence_score: 200,
        data_broker_id: 1,
        human_approved: 1,
        id: 1,
        opted_out: 0,
        url: 'https://www.spokeo.com/John-Doe/Utah/Salt-Lake-City/p40237321453',
      })
      .then(result => {
        console.log(result);
        values.birthdate = birthdate.join('-');
        alert('Added successfully');
      })
      .catch(err => console.log(err));
  };
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
          <Formik
            enableReinitialize={true}
            initialValues={userinfo}
            onSubmit={submit_userinfo}
          >
            {({ values, setFieldValue }) => (
              <Form className='left__form'>
                <div class='form__tabs'>
                  <Tabs type='card' size='large'>
                    <TabPane tab={firsttab} key='1'>
                      <Family_Member
                        userinfo={values}
                        userinfo_name={userinfo_name}
                      />
                    </TabPane>
                    <TabPane tab='Addresses' key='2'>
                      <Address
                        userinfo={values}
                        userinfo_name={userinfo_name}
                      />
                    </TabPane>
                    <TabPane tab='Phone Numbers' key='3'>
                      <Phone userinfo={values} userinfo_name={userinfo_name} />
                    </TabPane>
                  </Tabs>
                </div>
                <button>Submit</button>
              </Form>
            )}
          </Formik>
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

          {/* url(//mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/07/image_2020_07_30T03_25_26_775Z.png) */}
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
