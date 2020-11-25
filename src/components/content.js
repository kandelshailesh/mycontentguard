import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import './header.css';
import Submit_Removal from './submit_removal';
export default function Content() {
  return (
    <>
      <div className='main_content'>
        <Submit_Removal />
      </div>
    </>
  );
}
