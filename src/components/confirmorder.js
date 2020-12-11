import React from 'react';
import { Table } from 'antd';
export default function ConfirmOrder() {
  const order_no = 2020;
  const date = new Date().toISOString();
  const email = 'shailesh@gmail.com';
  const total = '34240';
  return (
    <>
      <div className='confirmorder'>
        <div className='confirmorder__heading1'>
          Thank you. Your order has been received
        </div>
        <div className='confirmorder__heading2'>
          <p className='heading2__orderno'>
            Order Number <br />
            {order_no}
          </p>
          <p className='heading2__date'>
            Date: <br />
            {date}
          </p>
          <p className='heading2__email'>
            Email <br />
            {email}
          </p>
          <p className='heading2__total'>
            Total
            <br />${total}
          </p>
        </div>
        <div className='confirmorder__heading3'>
          Thanks for purchasing a membership! You can view more details about
          your membership from <font color='red'>your account</font>.
        </div>
        <div className='confirmorder__heading4'>
          View the status of your subscription in
          <font color='red'>your account</font>.
        </div>
        <div className='confirmorder__heading5'>Order Details</div>
        <Table></Table>
      </div>
    </>
  );
}
