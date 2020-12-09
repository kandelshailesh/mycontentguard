import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [width, setWidth] = useState(() => window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [width]);
  return (
    <div className='footer'>
      <div className='footertop'>
        <div className='footertop__left'>
          <div className='left__description'>
            <p>
              <img
                width='300'
                height='37'
                className='logo'
                src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/07/mycontentguardlogosvg.svg'
                style={{ color: 'white' }}
                alt='myContentGuard Logo'
              />
            </p>
            <b>myContentGuard</b> isn’t just a software. We are a team of
            professionals with diverse backgrounds- digital forensics, copyright
            law, private investigators- that will tailor our services to fit
            your needs. We understand every situation is unique, and we’ll build
            on our team’s experience to get you successful results. You’ll
            always have a point of contact at myContentGuard, and you’ll be
            assigned a dedicated account representative
            <br />
            <br />
            Our parent company, <b>Web Group, LLC</b>, specializes in digital
            privacy offering comprehensive services for emergency scenarios
            catering to businesses and individuals. We’ve brought our skills and
            team together and created a service that can be accessed and used
            without a huge bill and complicated contracts.
            <p>
              <img
                width='235'
                height='190'
                className='logo'
                style={{ marginTop: 10 }}
                src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/07/usabasedcompany.svg'
                data-src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/07/usabasedcompany.svg'
                alt=''
              ></img>
            </p>
          </div>
          <div className='social-buttons'>
            <a
              className='social facebook'
              href='https://www.facebook.com/mycontentguard/'
              target='_blank'
            >
              <i className='fa fa-facebook'></i>
            </a>
            <a
              className='social linkedin'
              href='https://www.linkedin.com/company/mycontentguard/'
              target='_blank'
            >
              <i className='fa fa-linkedin'></i>
            </a>
            <a
              className='social youtube'
              href='https://www.youtube.com/channel/UCnogT5haWU7SLKLb6a3LpsA'
              target='_blank'
            >
              <i className='fa fa-youtube'></i>
            </a>
          </div>
        </div>
        <div className='footertop__right'>
          <h2> Get in touch </h2>
          <div className='contact-line'>
            <span>
              <i className='fa fa-envelope'></i>
            </span>
            <a rel='noreferrer' href='mailto:info@mycontentguard.com'>
              info@mycontentguard.com
            </a>
          </div>
          <div className='contact-line'>
            <span>
              <i className='fa fa-phone'></i>
            </span>
            <a rel='noreferrer' href='tel:18652259998'>
              +1 (865) 225-9998
            </a>
          </div>
          <div className='contact-line' style={{ marginBottom: 30 }}>
            <span>
              <i className='fa fa-check'></i>
            </span>
            30 N Gould STE R Sheridan, WY 82801
          </div>

          <h2> Quick Links </h2>

          <div className='contact-line'>
            <span>
              <i className='fa fa-caret-right'></i>
            </span>
            <a rel='noreferrer' href='https://mycontentguard.com/'>
              Home
            </a>
          </div>
          <div className='contact-line'>
            <span>
              <i className='fa fa-caret-right'></i>
            </span>
            <a
              rel='noreferrer'
              href='https://mycontentguard.com/business-solutions/'
            >
              Business
            </a>
          </div>
          <div className='contact-line'>
            <span>
              <i className='fa fa-caret-right'></i>
            </span>
            <a rel='noreferrer' href='https://mycontentguard.com/about-us/'>
              About Us
            </a>
          </div>
          <div className='contact-line'>
            <span>
              <i className='fa fa-caret-right'></i>
            </span>
            <a rel='noreferrer' href='https://mycontentguard.com/contact/'>
              Contact
            </a>
          </div>
          <div className='contact-line'>
            <span>
              <i className='fa fa-caret-right'></i>
            </span>
            <a rel='noreferrer' href='https://mycontentguard.com/my-account/'>
              Login
            </a>
          </div>
          <div className='contact-line'>
            <span>
              <i className='fa fa-caret-right'></i>
            </span>
            <a rel='noreferrer' href='https://mycontentguard.com/blog/'>
              Blog
            </a>
          </div>
          <div className='contact-line' style={{ marginBottom: 20 }}>
            <span>
              <i className='fa fa-caret-right'></i>
            </span>
            <a
              rel='noreferrer'
              href='https://mycontentguard.com/affiliate-program/'
            >
              Affiliate Program
            </a>
          </div>
          <a
            href='https://mycontentguard.com/get-started-now/'
            className='sign-up-btn'
          >
            SIGN UP NOW
          </a>
        </div>
      </div>
      <div className='footermiddle'>
        <div className='line'></div>
        <div className='footermiddle__featured'>
          <p>FEATURED ON</p>

          <span>
            {width < 800 ? (
              <img
                width='300'
                height='300'
                src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbannermobile-300x300.png'
                data-src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbannermobile-300x300.png'
                className='logo'
                alt=''
                data-srcset='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbannermobile-300x300.png 300w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbannermobile-100x100.png 100w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbannermobile-150x150.png 150w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbannermobile.png 350w'
                data-sizes='(max-width: 300px) 100vw, 300px'
                sizes='(max-width: 300px) 100vw, 300px'
                srcset='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbannermobile-300x300.png 300w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbannermobile-100x100.png 100w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbannermobile-150x150.png 150w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbannermobile.png 350w'
              ></img>
            ) : (
              <img
                width='800'
                height='80'
                src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbanner.png'
                data-src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbanner.png'
                className='logo'
                alt=''
                data-srcset='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbanner.png 1000w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbanner-600x60.png 600w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbanner-300x30.png 300w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbanner-768x77.png 768w'
                data-sizes='(max-width: 800px) 100vw, 800px'
                sizes='(max-width: 800px) 100vw, 800px'
                srcset='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbanner.png 1000w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbanner-600x60.png 600w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbanner-300x30.png 300w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/newsbanner-768x77.png 768w'
              ></img>
            )}
          </span>
        </div>
        <div className='line'></div>
        <div className='footer__bottom'>
          <div className='bottom__privacy'>
            <a rel='noreferrer' href='/privacy-policy'>
              Privacy Policy
            </a>
            |
            <a rel='noreferrer' href='/privacy-policy'>
              Terms of Service
            </a>
          </div>
          <div className='bottom__copyright'>
            © 2020 myContentGuard. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
