import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

export default function Header(props) {
  // alert(JSON.stringify(props, null, 2));
  const [active, setActive] = useState(() => {
    return props.location.pathname.split('/')[1];
  });
  const [width, setWidth] = useState(window.innerWidth);
  const [link, setLink] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    setActive(props.location.pathname.split('/')[1]);
  }, [width, active]);
  return (
    <>
      <div className='header'>
        <div className='header__logo'>
          <Link to='/'>
            <img
              width='300'
              height='37'
              src={props.src}
              alt='myContentGuard Logo'
            />
          </Link>
        </div>
        <div
          className={`header__linkgroup ${
            width > 1000 ? 'header__desktop_display' : 'header__mobile__display'
          }`}
          style={{ display: width < 1000 && link ? 'flex' : '' }}
        >
          <Link
            to='/submit-removals'
            onClick={() => setActive('submit-removals')}
            className={`header__linkgroup__link
              ${
                active === 'submit-removals' || active === ''
                  ? 'header__linkgroup__link--active'
                  : ''
              }`}
          >
            Submit Removals
          </Link>

          <Link
            onClick={() => setActive('removal-progress')}
            to='/removal-progress'
            className={`header__linkgroup__link display
            ${
              active === 'removal-progress'
                ? 'header__linkgroup__link--active'
                : ''
            }`}
          >
            Removal Progress
          </Link>
          <Link
            to='/user-profile'
            onClick={() => setActive('user-profile')}
            className={`header__linkgroup__link
              ${
                active === 'user-profile'
                  ? 'header__linkgroup__link--active'
                  : ''
              }`}
          >
            Edit Account
          </Link>
          <Link
            onClick={() => setActive('contact')}
            to='/contact'
            className={`header__linkgroup__link
            ${active === 'contact' ? 'header__linkgroup__link--active' : ''}`}
          >
            Contact
          </Link>
        </div>
        {!link ? (
          <MenuOutlined
            onClick={() => setLink(!link)}
            className='header__menu'
            style={{ color: 'black', fontSize: 25 }}
          />
        ) : (
          <CloseOutlined
            onClick={() => setLink(!link)}
            className='header__menu'
            style={{ color: 'black', fontSize: 25 }}
          />
        )}
      </div>
    </>
  );
}
