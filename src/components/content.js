import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Route, Switch } from 'react-router-dom';
import Submit_Removal from './submit_removal';
import Removal_Page from './removal_page';
import Removal_Progress from './removal_progress';
import Additional_Information from './additional_information';
import Contact from './contact';
export default function Content() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='main_content'>
      <Switch>
        <Route path='/submit-removals' component={Submit_Removal}></Route>
        <Route
          path='/removal-pages/additional-information/'
          component={Additional_Information}
        ></Route>
        <Route path='/removal-pages/:value' component={Removal_Page}></Route>

        <Route path='/removal-progress/' component={Removal_Progress}></Route>
        <Route path='/contact/' component={Contact}></Route>
        <Route path='/' component={Submit_Removal}></Route>
      </Switch>
    </div>
  );
}
