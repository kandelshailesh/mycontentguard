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
            to='/'
            onClick={() => setActive('home')}
            className={`header__linkgroup__link
              ${active === 'home' ? 'header__linkgroup__link--active' : ''}`}
            // style={{ backgroundColor: width < 1000 ? '#283ed4' : '' }}
          >
            Home
          </Link>

          {/* <Link
            // onClick={() => setActive('about-us')}
            to='https://mycontentguard.com/about-us/'
            className={`header__linkgroup__link display
            ${active === 'about-us' ? 'header__linkgroup__link--active' : ''}`}
            // style={{ backgroundColor: width < 1000 ? '#283ed4' : '' }}
          > */}
          <a
            className={`header__linkgroup__link display
            ${active === 'about-us' ? 'header__linkgroup__link--active' : ''}`}
            href='https://mycontentguard.com/about-us/'
          >
            About
          </a>
          {/* </Link> */}
          {/* <Link
            to={{
              pathname:
                'https://mycontentguard.com/lp/personal-data-removal-protection-promo/#getstarted',
            }}
            target='_blank'
            onClick={() => setActive('register')}
            className={`header__linkgroup__link
              ${
                active === 'register' ? 'header__linkgroup__link--active' : ''
              }`}
            // style={{ backgroundColor: width < 1000 ? '#283ed4' : '' }}
          > */}
          <a
            className={`header__linkgroup__link
              ${
                active === 'register' ? 'header__linkgroup__link--active' : ''
              }`}
            href='https://mycontentguard.com/lp/personal-data-removal-protection-promo/#getstarted'
          >
            Sign Up
          </a>
          {/* </Link> */}
          <Link
            onClick={() => setActive('my-account')}
            to='/my-account/'
            className={`header__linkgroup__link
            ${
              active === 'my-account' ? 'header__linkgroup__link--active' : ''
            }`}
            // style={{ backgroundColor: width < 1000 ? '#283ed4' : '' }}
          >
            Login
          </Link>
          {/* <Link
            onClick={() => setActive('contact')}
            to='/contact'
            className={`header__linkgroup__link
            ${active === 'contact' ? 'header__linkgroup__link--active' : ''}`}
            // style={{ backgroundColor: width < 1000 ? '#283ed4' : '' }}
          > */}
          <a
            className={`header__linkgroup__link display
            ${active === 'about-us' ? 'header__linkgroup__link--active' : ''}`}
            href='https://mycontentguard.com/contact/'
          >
            Contact
          </a>
          {/* </Link> */}
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
