import React, { useEffect, useState, useContext } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Tabs, message } from 'antd';
import Family_Member from './family_member';
import Address from './address';
import Phone from './phone';
import { axiosInstance } from '../utils/axiosInstance';
import { Formik, Field, Form } from 'formik';
import { userform_name } from './formname_generator';
import { mock_data } from './dummy_data';
import getUserID from '../utils/getUserID';
import { MCG } from '../index';
const nametotab = {
  'Main User Info': 'user-info',
  'Family Member#1': 'family-member-1',
  'Family Member#2': 'family-member-2',
  'Family Member#3': 'family-member-3',
  'Family Member#4': 'family-member-4',
  'Family Member#5': 'family-member-5',
  'Family Member#6': 'family-member-6',
  'Family Member#7': 'family-member-7',
  'Family Member#8': 'family-member-8',
  'Family Member#9': 'family-member-9',
};
const tablist = {
  'user-info': 'Main User Info',
  'family-member-1': 'Family Member#1',
  'family-member-2': 'Family Member#2',
  'family-member-3': 'Family Member#3',
  'family-member-4': 'Family Member#4',
  'family-member-5': 'Family Member#5',
  'family-member-6': 'Family Member#6',
  'family-member-7': 'Family Member#7',
  'family-member-8': 'Family Member#8',
  'family-member-9': 'Family Member#9',
};
const tabindex = {
  'Family Member#1': 0,
  'Family Member#2': 1,
  'Family Member#3': 2,
  'Family Member#4': 3,
  'Family Member#5': 4,
  'Family Member#6': 5,
  'Family Member#7': 6,
  'Family Member#8': 7,
  'Family Member#9': 8,
};

const perm_level = { 1: 0, 2: 1, 3: 3, 4: 3 };

const { TabPane } = Tabs;
// const user_id = getUserID();

export default function Removal_Page(props) {
  // alert(JSON.stringify(props, null, 2));
  const [firsttab, setFirstTab] = useState(() => {
    if (props.location?.state?.value) {
      return props.location.state.value;
    } else if (props.match.params.value) {
      return tablist[props.match.params.value];
    }

    // props.location.state.value || tablist[props.match.params.value],
  });
  const [userinfo, setUserInfo] = useState('');
  const [dummy_userinfo, set_dummy_userinfo] = useState('');
  const [userinfo_name, setuserinfo_name] = useState('');
  const { user_id, permission_level } = React.useContext(MCG);

  useEffect(() => {
    if (props.location.state) {
      const { value } = props.location.state;
      setFirstTab(value);
      document.title = `${value} | myContentGuard`;
      setuserinfo_name(userform_name(nametotab[value]));
    } else {
      setFirstTab(tablist[props.match.params.value]);
      document.title = `${tablist[props.match.params.value]} | myContentGuard`;
      setuserinfo_name(userform_name(props.match.params.value));
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    axiosInstance
      .get(`/api/client/${user_id}`)
      .then(data => {
        console.log(data);
        const userinfo_api = data.data.data;
        // const userinfo_api = mock_data.data[0];
        const birthdate = data.data.data.birthdate;
        // const birthdate = mock_data.data[0].birthdate;
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
            userinfo_api.aliases = userinfo_api.aliases.join(',');
            userinfo_api.past_emails = userinfo_api.past_emails.join(',');

            break;
          case 'Family Member#1':
          case 'Family Member#2':
          case 'Family Member#3':
            if (userinfo_api.relatives[tabindex[firsttab]]) {
              userinfo_api.relatives[
                tabindex[firsttab]
              ].birthdate = userinfo_api.relatives[tabindex[firsttab]].birthdate
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
              userinfo_api.relatives[
                tabindex[firsttab]
              ].aliases = userinfo_api.aliases.join(',');
              userinfo_api.relatives[
                tabindex[firsttab]
              ].past_emails = userinfo_api.past_emails.join(',');
            } else {
              userinfo_api.relatives[tabindex[firsttab]] = {
                age: '',
                aliases: '',
                birthdate: '',
                current_phone: '',
                current_address: {
                  city: '',
                  country: '',
                  state: '',
                  street: '',
                  zip_code: '',
                },
                current_email: '',
                gender: '',
                client_id: userinfo_api.id,
                name: '',
                past_emails: [],
                past_phones: [],
                past_adresses: [],
              };
            }
            break;
        }
        setUserInfo(userinfo_api);
        set_dummy_userinfo(userinfo_api);
      })
      .catch(err => console.log(err.error));
  }, []);

  const submit_userinfo = values => {
    var birthdate;
    if (tabindex[firsttab] === undefined) {
      birthdate = values.birthdate ? values.birthdate.split('-') : '';
      if (values.birthdate) {
        values.birthdate =
          birthdate[1] + '/' + birthdate[2] + '/' + birthdate[0];
      }
      if (values.aliases) {
        values.aliases = values.aliases.split(',');
      }
      if (values.past_emails) {
        values.past_emails = values.past_emails.split(',');
      }
    } else if (values.relatives[Number(tabindex[firsttab])]) {
      if (values.relatives[Number(tabindex[firsttab])].birthdate) {
        birthdate = values.relatives[
          Number(tabindex[firsttab])
        ].birthdate.split('-');
        values.relatives[Number(tabindex[firsttab])].birthdate =
          birthdate[1] + '/' + birthdate[2] + '/' + birthdate[0];
      }
      if (values.relatives[Number(tabindex[firsttab])].past_emails) {
        values.relatives[
          Number(tabindex[firsttab])
        ].past_emails = values.relatives[
          Number(tabindex[firsttab])
        ].past_emails.split(',');
      }
      if (values.relatives[Number(tabindex[firsttab])].aliases) {
        values.relatives[Number(tabindex[firsttab])].aliases = values.relatives[
          Number(tabindex[firsttab])
        ].aliases.split(',');
      }
      values.relatives[Number(tabindex[firsttab])].client_id = user_id;
    }
    // var client_data;
    // if (tabindex[firsttab] === undefined) {
    //   client_data = {
    //     age: values.age || '',
    //     aliases: values.aliases || '',
    //     birthdate: values.birthdate || '',
    //     current_phone: values.current_phone || '',
    //     current_address: {
    //       city: values.city || '',
    //       country: values.country || '',
    //       state: values.state || '',
    //       street: values.street || '',
    //       zip_code: values.zip_code || '',
    //     },
    //     current_email: values.current_email || '',
    //     gender: values.gender || '',
    //     id: values.id,
    //     name: values.name || '',
    //     past_emails: [],
    //     past_phones: [],
    //     past_adresses: [],
    //   };
    // } else {
    //   var index = Number(tabindex[firsttab]);

    //   values.relatives.forEach((value, index, array) => {});
    //   client_data = {
    //     relatives: [
    //       ...values.relatives,
    //       {
    //         age: values.relatives[Number(tabindex[firsttab])].age || '',
    //         aliases: values.relatives[Number(tabindex[firsttab])].aliases || '',
    //         birthdate:
    //           values.relatives[Number(tabindex[firsttab])].birthdate || '',
    //         current_phone:
    //           values.relatives[Number(tabindex[firsttab])].current_phone || '',
    //         current_address: {
    //           city: values.relatives[Number(tabindex[firsttab])].city || '',
    //           country:
    //             values.relatives[Number(tabindex[firsttab])].country || '',
    //           state: values.relatives[Number(tabindex[firsttab])].state || '',
    //           street: values.relatives[Number(tabindex[firsttab])].street || '',
    //           zip_code:
    //             values.relatives[Number(tabindex[firsttab])].zip_code || '',
    //         },
    //         current_email:
    //           values.relatives[Number(tabindex[firsttab])].current_email || '',
    //         gender: values.relatives[Number(tabindex[firsttab])].gender || '',
    //         id: values.relatives[Number(tabindex[firsttab])].id,
    //         name: values.relatives[Number(tabindex[firsttab])].name || '',
    //         past_emails: [],
    //         past_phones: [],
    //         past_adresses: [],
    //       },
    //     ],
    //   };
    // }

    axiosInstance
      .patch(`/api/client/${user_id}`, {
        ...values,
      })
      .then(result => {
        console.log(result);
        message.success('User info updated successfully');
        if (values.relatives[Number(tabindex[firsttab])]) {
          if (values.relatives[Number(tabindex[firsttab])].birthdate) {
            values.relatives[
              Number(tabindex[firsttab])
            ].birthdate = birthdate.join('-');
          }
          // if (values.relatives[Number(tabindex[firsttab])].past_emails) {
          //   values.relatives[
          //     Number(tabindex[firsttab])
          //   ].past_emails = values.relatives[
          //     Number(tabindex[firsttab])
          //   ].past_emails.join(',');
          // }
          // if (values.relatives[Number(tabindex[firsttab])].aliases) {
          //   values.relatives[
          //     Number(tabindex[firsttab])
          //   ].aliases = values.relatives[
          //     Number(tabindex[firsttab])
          //   ].aliases.join(',');
          // }
        } else if (tabindex[firsttab] === undefined) {
          if (values.birthdate) {
            values.birthdate = birthdate.join('-');
          }
          // if (values.aliases) {
          //   values.aliases = values.aliases.join(',');
          // }
          // if (values.past_emails) {
          //   values.past_emails = values.past_emails.join(',');
          // }
        }
      })
      .catch(err => message.error('Please try again !'));
  };
  return (
    <>
      <div className='removal_page'>
        <div className='removal_page__left'>
          <p className='left__heading1'>
            <Link to='/submit-removals'>
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
                <button type='submit'>Submit</button>
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
