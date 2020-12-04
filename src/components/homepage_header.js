import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

export default function Homepage_Header({ src }) {
  const [active, setActive] = useState('submit-removals');
  const [width, setWidth] = useState(window.innerWidth);
  const [link, setLink] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, [width]);
  return (
    <>
      <div className='header'>
        <div className='header__logo'>
          <Link to='/'>
            <img width='300' height='37' src={src} alt='myContentGuard Logo' />
          </Link>
        </div>
        <div
          className={`header__linkgroup ${
            width > 1000 ? 'header__desktop_display' : 'header__mobile__display'
          }`}
          style={{
            display: width < 1000 && link ? 'flex' : '',
          }}
        >
          <Link
            to='/'
            onClick={() => setActive('home')}
            className={`header__linkgroup__link
              ${active === 'home' ? 'header__linkgroup__link--active' : ''}`}
            style={{ backgroundColor: width < 1000 ? '#283ed4' : '' }}
          >
            Home
          </Link>

          <Link
            onClick={() => setActive('about-us')}
            to='/about-us'
            className={`header__linkgroup__link display
            ${active === 'about-us' ? 'header__linkgroup__link--active' : ''}`}
            style={{ backgroundColor: width < 1000 ? '#283ed4' : '' }}
          >
            About
          </Link>
          <Link
            to='https://mycontentguard.com/lp/personal-data-removal-protection-promo/#getstarted'
            onClick={() => setActive('register')}
            className={`header__linkgroup__link
              ${
                active === 'register' ? 'header__linkgroup__link--active' : ''
              }`}
            style={{ backgroundColor: width < 1000 ? '#283ed4' : '' }}
          >
            Sign Up
          </Link>
          <Link
            onClick={() => setActive('my-account')}
            to='/my-account/'
            className={`header__linkgroup__link
            ${
              active === 'my-account' ? 'header__linkgroup__link--active' : ''
            }`}
            style={{ backgroundColor: width < 1000 ? '#283ed4' : '' }}
          >
            Login
          </Link>
          <Link
            onClick={() => setActive('contact')}
            to='/contact'
            className={`header__linkgroup__link
            ${active === 'contact' ? 'header__linkgroup__link--active' : ''}`}
            style={{ backgroundColor: width < 1000 ? '#283ed4' : '' }}
          >
            Contact
          </Link>
        </div>
        {!link ? (
          <MenuOutlined
            onClick={() => setLink(!link)}
            className='header__menu'
            style={{ color: 'white', fontSize: 25 }}
          />
        ) : (
          <CloseOutlined
            onClick={() => setLink(!link)}
            className='header__menu'
            style={{ color: 'white', fontSize: 25 }}
          />
        )}
      </div>
    </>
  );
}
