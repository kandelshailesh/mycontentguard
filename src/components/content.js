import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Route, Switch } from 'react-router-dom';
import Submit_Removal from './submit_removal';
import Removal_Page from './removal_page';
import Removal_Progress from './removal_progress';
import Additional_Information from './additional_information';
import Contact from './contact';
import Edit_Section from './editsection';
import { Index } from './404';
export default function Content() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='main_content'>
      <Switch>
        <Route
          exact
          path={['/', '/submit-removals']}
          component={Submit_Removal}
        ></Route>
        <Route
          path='/removal-pages/additional-information'
          component={Additional_Information}
        ></Route>
        <Route path='/removal-pages/:value' component={Removal_Page}></Route>
        <Route path='/removal-progress/' component={Removal_Progress}></Route>
        <Route path='/contact/' component={Contact}></Route>
        <Route path='/user-profile' component={Edit_Section}></Route>
        {/* <Route path='/home/' component={Homepage}></Route> */}

        {/* <Route path='/'>
          <Redirect to='/home'></Redirect>
        </Route> */}
        <Route component={Index}></Route>
      </Switch>
    </div>
  );
}
