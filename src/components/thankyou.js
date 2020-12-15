import React from 'react';
import { Table } from 'antd';
import { useParams, Redirect } from 'react-router-dom';
import queryString from 'query-string';
export default function Thankyou(props) {
  const { search } = props.location;
  //   const match = search.match(/order_id=(.*)/);
  //   const order_id = match?.[1];
  let { order_id, email } = queryString.parse(search);

  if (order_id && email) {
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
              <div>
                Thanks for purchasing a membership! You can view more details
                about your membership from <font color='red'>your account</font>
              </div>
              <div>
                View the status of your subscription in
                <font color='red'> your account</font>.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    <Redirect to='/' />;
  }
}
