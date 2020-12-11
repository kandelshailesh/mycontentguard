import React from 'react';
import { Table } from 'antd';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';
export default function Thankyou(props) {
  const { search } = props.location;
  //   const match = search.match(/order_id=(.*)/);
  //   const order_id = match?.[1];
  let { order_id, email } = queryString.parse(search);
  email = email ? email : 'shailesh@gmail.com';

  return (
    <>
      <div className='thankyou'>
        <div className='thankyou__main'>
          <div className='thankyou__card1'>
            <div className='thankyou__heading1'>
              <i className='fa fa-check-circle-o'></i>
              <span>Order #{order_id}</span>
            </div>
            <div className='thankyou__heading2'>
              Thankyou <b>{email}</b>
            </div>
          </div>
          <div className='thankyou__card2'>
            Thanks for purchasing a membership! You can view more details about
            your membership from <font color='red'>your account</font>.
          </div>
          <div className='thankyou__card3'>
            View the status of your subscription in
            <font color='red'> your account</font>.
          </div>
        </div>
      </div>
    </>
  );
}
