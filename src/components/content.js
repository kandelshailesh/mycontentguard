import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Route, Switch } from 'react-router-dom';
import './content.css';
import Submit_Removal from './submit_removal';
import Removal_Page from './removal_page';
import Removal_Progress from './removal_progress';
export default function Content() {
  return (
    <div className='main_content'>
      <Switch>
        <Route path='/submit-removals' component={Submit_Removal}></Route>
        <Route path='/removal-pages/:value' component={Removal_Page}></Route>
        <Route path='/removal-progress/' component={Removal_Progress}></Route>
        <Route path='/' component={Submit_Removal}></Route>
      </Switch>
    </div>
  );
}
