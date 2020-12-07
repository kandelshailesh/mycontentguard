import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import Header from './header';
import Homepage_Header from './homepage_header';
import { Carousel } from 'antd';
import { customerReview } from '../constants/index';

export default function Homepage() {
  const [plan, setplan] = useState('monthly');
  const [seemore_annualsingle, set_seemore_annualsingle] = useState(false);
  const [seemore_annualfamily, set_seemore_annualfamily] = useState(false);
  const [seemore_monthlysingle, set_seemore_monthlysingle] = useState(false);
  const [seemore_monthlyfamily, set_seemore_monthlyfamily] = useState(false);
  const [counter, set_counter] = useState(50000);
  const [total_review, settotal_review] = useState(5000);
  const [isMobile, setisMobile] = useState(false);

  // const width = window.innerWidth;

  // const [currentCount, setCount] = useState(10);
  const timer = () => {
    set_counter(counter + Math.floor(Math.random() * 10000));
    settotal_review(counter);
  };
  useEffect(() => {
    if (window.innerWidth < 800) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  });
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 800) {
        setisMobile(true);
      } else {
        setisMobile(false);
      }
      // setWidth(window.innerWidth);
    });
  }, [window.innerWidth]);
  useEffect(() => {
    if (counter > 250000) {
      settotal_review('250,000');
      return;
    }
    const id = setInterval(timer, 10);
    return () => clearInterval(id);
  }, [counter]);

  const props = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
  };

  return (
    <div className='homepage'>
      <div className='homepage__section1'>
        <Homepage_Header
          src={
            'https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/mycontentguardlogowhite.svg'
          }
        ></Homepage_Header>
        <div className='section1__main'>
          <div className='section1__child'>
            <p className='heading1'>
              DELETE YOUR NAME & INFO FROM GOOGLE AND DATA WEBSITES
            </p>
            <p className='heading2'>
              In one search- anyone can find your name, address, phone number,
              private data & much more.
            </p>
            <p className='heading3'>
              {/* <svg
                style={{ width: 20, height: 20 }}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'></path>
              </svg> */}
              <i className='fa fa-check'></i> &nbsp; 30 day money-back guarantee
              <br />
              <i className='fa fa-check'></i> &nbsp;Cancel at anytime
            </p>
            <p className='heading4'>
              <button className='delete'>DELETE NOW</button>
              <button className='learn_more'>LEARN MORE</button>
            </p>
          </div>
        </div>
      </div>
      <div className='homepage__section2'>
        <div className='section2__heading1'>
          <p className='heading1__title'>How It Works</p>
        </div>
        <p className='section2__heading2'>
          How myContentGuard Removes Unwanted Information Online
        </p>
      </div>
      <div className='homepage__section3'>
        <div className='section3__description'>
          <div className='description__details'>
            <div className='details__image'>
              <img
                width='125'
                height='125'
                src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/Search-Engine-Optimation-with-bg.svg'
                alt=''
              />
            </div>
            <div className='details__text'>
              <label className='text__title'>Identify</label>
              <label className='text__body'>
                Submit your details & personal information that you want removed
                from data brokers and search engines.
              </label>
            </div>
          </div>
          <div className='description__details'>
            <div className='details__image'>
              <img
                width='125'
                height='125'
                src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/google.svg'
                alt=''
              />
            </div>
            <div className='details__text'>
              <label className='text__title'>Removals</label>
              <label className='text__body'>
                Our team will immediately go to work for you, locate your
                information and begin the removal process.
              </label>
            </div>
          </div>
          <div className='description__details'>
            <div className='details__image'>
              <img
                width='125'
                height='125'
                src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/Security-Icon.svg'
                alt=''
              />
            </div>
            <div className='details__text'>
              <label className='text__title'>Results</label>
              <label className='text__body'>
                You'll be given a detailed report with all the websites and
                platforms we've removed your data from.
              </label>
            </div>
          </div>
          <div className='description__details'>
            <div className='details__image'>
              <img
                width='125'
                height='125'
                src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/Page-Quality.svg'
                alt=''
              />
            </div>
            <div className='details__text'>
              <label className='text__title'>Monitoring</label>
              <label className='text__body'>
                Our team constantly monitors your public data online and will
                submit removals if more of your info is found.
              </label>
            </div>
          </div>
        </div>
        <div className='section3__image'>
          <img
            width='500'
            height='500'
            src='./Delete Personal Info From Google &amp; Internet - myContentGuard_files/identify-pic-dots.png'
            class='attachment-large size-large'
            alt=''
            srcset='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/identify-pic-dots.png 1000w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/identify-pic-dots-300x300.png 300w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/identify-pic-dots-100x100.png 100w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/identify-pic-dots-600x600.png 600w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/identify-pic-dots-150x150.png 150w, https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/identify-pic-dots-768x768.png 768w'
            sizes='(max-width: 800px) 100vw, 800px'
          />
        </div>
      </div>
      <div className='homepage__section4'>
        <div className='section2__heading1'>
          <p className='heading1__title'>Some key features</p>
        </div>
        <p className='section2__heading2'>Built For Your Peace Of Mind.</p>
      </div>

      <div className='homepage__section5'>
        <div className='section5__left'>
          <img
            className='image'
            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/smartmockups_kgty5qw9.png'
          ></img>
          <label className='image__title'>
            <i>
              Submit removal requests, get detailed reports, and get instant
              help in myContentGuard's all-in-one member's dashboard.
            </i>
          </label>
        </div>
        <div className='section5__right'>
          <p className='right__title'>We remove and guard against:</p>
          <div className='description__details'>
            <div className='details__icon'>
              <i className='hm hm-article'></i>
            </div>
            <div className='details__text'>
              <label className='text__title'>Public Records</label>
              <label className='text__body'>
                Such as your name, current and past addresses, phone numbers,
                family & relatives
              </label>
            </div>
          </div>
          <div className='description__details'>
            <div className='details__icon'>
              <i className='hm hm-dislike'></i>
            </div>
            <div className='details__text'>
              <label className='text__title'>Negative Results</label>
              <label className='text__body'>
                Unwanted or negative results on search results using your
                personal info.
              </label>
            </div>
          </div>
          <div className='description__details'>
            <div className='details__icon'>
              <i className='hm hm-shield'></i>
            </div>
            <div className='details__text'>
              <label className='text__title'>Private Data</label>
              <label className='text__body'>
                Household income, divorce and court records, voting records, and
                sensitive information.
              </label>
            </div>
          </div>
          <button className='button__protection'>PICK A PROTECTION PLAN</button>
        </div>
      </div>
      <div className='homepage__section6'>
        <p className='section6__title'>
          Choose From Our Most Popular Plans That Best Fits You
        </p>
        <p className='section6__body'>
          Keep you and your loved ones' personal information safe and private
          online.
          <br /> We offer both yearly & monthly plans. No commitment, no risk-
          start removals in just 5 minutes.
        </p>
        <div className='line'></div>
        <div className='section6__main'>
          <div className='main__button'>
            <button
              onClick={() => setplan('annual')}
              className={`button__annual ${
                plan === 'annual' ? 'planbutton__background' : ''
              }`}
            >
              ANNUAL
            </button>
            <button
              onClick={() => setplan('monthly')}
              className={`button__monthly ${
                plan === 'monthly' ? 'planbutton__background' : ''
              }`}
            >
              MONTHLY
            </button>
          </div>
          <div className='main__plan'>
            {plan === 'annual' && (
              <div className='plan__annual'>
                <div className='annual__single'>
                  <p className='plan__name'>1-YEAR SINGLE USER PLAN</p>
                  <div className='plan__line'>
                    <div className='line'></div>
                  </div>
                  <label className='plan__rateduration'>
                    <label className='plan__rate'>$8.15</label>
                    <label className='plan__duration'>per month</label>
                  </label>
                  <label className='plan__saving'>SAVE $81.60</label>
                  <button className='plan__button'>
                    START PROTECTION PLAN
                  </button>
                  <div className='plan__features'>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Personal Data
                      Identification
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Removal From
                      Google & Major Search Engines
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Weekly
                      Interactive Reports & Alerts
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Submit
                      Specific Content for Removal
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;USA Based
                      Support by Phone, Email & Chat 24/7
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Reduce
                      Telemarketing Calls
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Reduce Junk
                      Mail
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Removal From
                      People Search Sites
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Removal From
                      Data Broker Lists
                    </label>
                    <label>
                      <i className='fa fa-plus-circle'></i> &nbsp; &nbsp;Many
                      More Privacy Tools
                    </label>
                  </div>
                  <button
                    onClick={() => set_seemore_annualsingle(prev => !prev)}
                    className='plan__additionalbutton'
                  >
                    See more features
                  </button>
                  {seemore_annualsingle && (
                    <>
                      <hr />
                      <div className='additional__plan__features'>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Search result removals
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Exposed data sites removal
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Auto-monitoring for new sites
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Auto opt-out of all major data brokers
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Specific data removal requests
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Weekly reports in members area
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          /Email/Chat support 24/7
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Personal privacy assistant
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Dark web scanner and monitoring
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Data leak rapid response
                        </label>
                      </div>
                    </>
                  )}
                </div>

                <div className='annual__family'>
                  <button className='best__value'>BEST VALUE</button>
                  <p className='plan__name'>
                    1-YEAR FAMILY PLAN (UP TO 4 USERS)
                  </p>
                  <div className='plan__line'>
                    <div className='line'></div>
                  </div>
                  <label className='plan__rateduration'>
                    <label className='plan__rate'>$24.60</label>
                    <label className='plan__duration'>per month</label>
                  </label>
                  <label className='plan__saving'>SAVE $98</label>
                  <button className='plan__button'>
                    START PROTECTION PLAN
                  </button>

                  <div className='plan__features'>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Add Up To 4
                      Users On Your Account At Anytime
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Personal Data
                      Identification and Removal
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Personal Data
                      Identification and Removal
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Removal From
                      Google & Major Search Engines
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Weekly
                      Interactive Reports & Alerts
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Submit
                      Specific Content for Removal
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;USA Based
                      Support by Phone, Email & Chat 24/7
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Reduce
                      Telemarketing Calls
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Reduce Junk
                      Mail
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Removal From
                      People Search Sites
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Removal From
                      Data Broker Lists
                    </label>
                    <label>
                      <i className='fa fa-plus-circle'></i> &nbsp; &nbsp;Many
                      More Privacy Tools
                    </label>
                  </div>
                  <button
                    onClick={() => set_seemore_annualfamily(prev => !prev)}
                    className='plan__additionalbutton'
                  >
                    See more features
                  </button>
                  {seemore_annualfamily && (
                    <>
                      <hr />
                      <div className='additional__plan__features'>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Search result removals
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Exposed data sites removal
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Auto-monitoring for new sites
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Auto opt-out of all major data brokers
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Specific data removal requests
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Weekly reports in members area
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          /Email/Chat support 24/7
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Personal privacy assistant
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Dark web scanner and monitoring
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Data leak rapid response
                        </label>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
            {plan === 'monthly' && (
              <div className='plan__monthly'>
                <div className='monthly__single'>
                  <p className='plan__name'>PROTECTION PLUS</p>
                  <div className='plan__line'>
                    <div className='line'></div>
                  </div>
                  <label className='plan__rateduration'>
                    <label className='plan__rate'>$14.95</label>
                    <label className='plan__duration'>per month</label>
                  </label>
                  {/* <label className='plan__saving'>SAVE $81.60</label> */}
                  <button className='plan__button'>
                    START PROTECTION PLAN
                  </button>
                  <div className='plan__features'>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp; Single
                      person data removal
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Personal Data
                      Identification and Removal
                    </label>

                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Remove Search
                      Engine Results*
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp; Interactive
                      Reports & Alerts
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp; US Support
                      by Phone, Email & Chat
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;USA Removal
                      From People Search Sites
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Removal From
                      Data Broker Lists
                    </label>
                  </div>

                  <button
                    onClick={() => set_seemore_monthlysingle(prev => !prev)}
                    className='plan__additionalbutton'
                  >
                    See more features
                  </button>
                  {seemore_monthlysingle && (
                    <>
                      <hr />
                      <div className='additional__plan__features'>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Search result removals
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Exposed data sites removal
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Auto-monitoring for new sites
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Auto opt-out of all major data brokers
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Specific data removal requests
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Weekly reports in members area
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          /Email/Chat support 24/7
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Personal privacy assistant
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Dark web scanner and monitoring
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Data leak rapid response
                        </label>
                      </div>
                    </>
                  )}
                </div>
                <div className='monthly__family'>
                  <button className='best__value'>BEST VALUE</button>
                  <p className='plan__name'>FAMILY PLAN (UP TO 4 USERS)</p>
                  <div className='plan__line'>
                    <div className='line'></div>
                  </div>
                  <label className='plan__rateduration'>
                    <label className='plan__rate'>$29.85</label>
                    <label className='plan__duration'>per month</label>
                  </label>
                  <label className='plan__saving'>SAVE $29.95</label>
                  <button className='plan__button'>
                    START PROTECTION PLAN
                  </button>
                  <div className='plan__features'>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Add Up To 4
                      Users On Your Account At Anytime
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Personal Data
                      Identification and Removal
                    </label>

                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp; Remove
                      Search Engine Results*
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp; Interactive
                      Reports & Alerts
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;US Support by
                      Phone, Email & Chat
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;USA Based
                      Support by Phone, Email & Chat 24/7
                    </label>
                    <label>
                      <i className='fa fa-check'></i> &nbsp; &nbsp;Removal From
                      People Search Sites
                    </label>
                  </div>

                  <button
                    onClick={() => set_seemore_monthlyfamily(prev => !prev)}
                    className='plan__additionalbutton'
                  >
                    See more features
                  </button>
                  {seemore_monthlyfamily && (
                    <>
                      <hr />
                      <div className='additional__plan__features'>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Search result removals
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Exposed data sites removal
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Auto-monitoring for new sites
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Auto opt-out of all major data brokers
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Specific data removal requests
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Weekly reports in members area
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          /Email/Chat support 24/7
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Personal privacy assistant
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Dark web scanner and monitoring
                        </label>
                        <label>
                          <img
                            width='20'
                            height='20'
                            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                            class='attachment-large size-large'
                            alt=''
                          />
                          Data leak rapid response
                        </label>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='homepage__section7'>
        <div className='section7__heading1'>
          <p className='heading1__title'>What We Do</p>
        </div>
      </div>
      <div className='homepage__section8'>
        <div className='section8__image'>
          <img
            className='image'
            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/mockup-dots.png'
          ></img>
        </div>
        <div className='section8__description'>
          <label className='description__title'>
            Take Control Of Your Digital Privacy
          </label>
          <label className='description__body'>
            myContentGuard removes and prevents your personal data from being
            listed on the internet and search results. Never worry about
            unwanted or personal information being leaked online- we’ve got it
            handled.
          </label>
          <button className='description__button'>PROTECT MY PRIVACY</button>
        </div>
      </div>
      <div className='homepage__section9'>
        <div className='section9__heading1'>
          <p className='heading1__title'>Customer Reviews</p>
        </div>
        <p className='section9__heading2'>See What Our Customers Are Saying!</p>
        <div className='section9__heading3'>
          <label>
            Over
            <br /> {total_review}
          </label>
        </div>
        <label className='section9__heading4'>Removals & Counting</label>

        {/* <p></p> */}
      </div>
      <Carousel {...props} autoplay className='section9__carousel'>
        {customerReview.map((value, index, array) => (
          <div className='carousel__slicker'>
            <div className='slicker__content'>
              <p>{value.reviewContent}</p>
            </div>
            <div className='slicker__bottom'>
              <img
                className='bottom__icon'
                src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                data-src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/insurance-01.svg'
                alt='Hailey Stans'
              />
              <div className='bottom__customer'>
                <label className='customer__name'>{value.reviewerName}</label>
                <label className='verified__customer'>Verified Customer</label>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className='homepage__section10'>
        <div className='section10__heading1'>
          <p className='heading1__title'>Why myContentGuard?</p>
        </div>
        <div className='section10__main'>
          <div className='section10__left'>
            <p className='left__title'>Fast removals. Trusted protection.</p>
            <p className='left__body1'>
              <span>myContentGuard</span> is more than just a monitoring
              service. We search hundreds of thousands of websites and major
              search engines- including Google, Bing, and Yahoo, to locate your
              unwanted personal information.
            </p>
            <p className='left__body2'>
              Your &nbsp;
              <b>name, phone number, address, email address, photos and more</b>
              &nbsp; are located and sent for immediate removal from data broker
              websites and search engines.
            </p>
            <button className='left__button'> PICK A PROTECTION PLAN</button>
          </div>
          <div className='section10__right'>
            <img
              className='image'
              src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/10/mockup-1.png'
            ></img>
          </div>
        </div>
      </div>
      <div className='homepage__section11'>
        <label className='section11__title'>
          Join the thousands of people using myContentGuard
        </label>
        <p className='section11__description'>
          <i>– The fastest growing data removal company in the United States</i>
        </p>
        <button className='section11__getstarted'>GET STARTED TODAY</button>
      </div>
    </div>
  );
}
