import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {} from '@ant-design/icons';
import './header.css';

export default function Header() {
  const [active, setActive] = useState('submit-removals');
  return (
    <>
      <div className='header'>
        <div className='header__logo'>
          <Link to='/'>
            <img
              width='300'
              height='37'
              src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/07/mycontentguardlogosvg.svg'
              alt='myContentGuard Logo'
            />
          </Link>
        </div>

        <div className='header__link'>
          <Link
            to='/submit-removals'
            onClick={() => setActive('submit-removals')}
            className={
              active === 'submit-removals' ? 'header__link--active' : ''
            }
          >
            Submit Removals
          </Link>

          <Link
            onClick={() => setActive('removal-progress')}
            to='/removal-progress'
            className={
              active === 'removal-progress' ? 'header__link--active' : ''
            }
          >
            Removal Progress
          </Link>
          <Link
            to='/user-profile'
            onClick={() => setActive('user-profile')}
            className={active === 'user-profile' ? 'header__link--active' : ''}
          >
            Edit Account
          </Link>
          <Link
            onClick={() => setActive('contact')}
            to='/contact'
            className={active === 'contact' ? 'header__link--active' : ''}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
