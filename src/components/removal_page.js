import React, { useEffect, useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import Family_Member from './family_member';
import Address from './address';
import Phone from './phone';
import { axiosInstance } from './axiosInstance';
import { Formik, Field, Form } from 'formik';
import { userform_name } from './formname_generator';
import { mock_data } from './dummy_data';
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
      .get('/api/client/')
      .then(data => {
        console.log(data);
        // const userinfo_api = data.data.data;
        const userinfo_api = mock_data.data[0];

        // const birthdate = data.data.data.birthdate;
        const birthdate = mock_data.data[0].birthdate;

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

            break;
          case 'Family Member#1':
          case 'Family Member #2':
          case 'Family Member #3':
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

            // userinfo_api.relatives[tabindex[firsttab]].past_adresses.forEach(
            //   (value, index) => {
            //     userinfo_api.relatives[tabindex[firsttab]].past_adresses[
            //       index
            //     ] =
            //       value.city +
            //       ',' +
            //       value.street +
            //       ',' +
            //       value.state +
            //       ',' +
            //       value.country;
            //   },
            // );
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
