import React from 'react';
import { Link } from 'react-router-dom';
export default function Removal_Progress() {
  return (
    <div className='removal_progress'>
      <div className='heading__first'>
        <div className='first__card'>
          <div className='card__first'>
            <div className='first__icon'>
              <i className='fa fa-check-circle'></i>
            </div>
            <div className='first__status'>
              <p>
                <b>Shailesh Kandel</b> <br />
                Protection:Active
              </p>
            </div>
          </div>
          <div className='card__first'>
            <div className='first__icon'>
              <i className='fa fa-check-circle'></i>
            </div>
            <div className='first__status'>
              <p>
                <b>Family Member #1</b> <br />
                Protection:Active
              </p>
            </div>
          </div>
          <div className='card__first'>
            <div className='first__icon'>
              <i className='fa fa-check-circle'></i>
            </div>
            <div className='first__status'>
              <p>
                <b>Family Member #2</b> <br />
                Protection:Active
              </p>
            </div>
          </div>
          <div className='card__first'>
            <div className='first__icon'>
              <i className='fa fa-check-circle'></i>
            </div>
            <div className='first__status'>
              <p>
                <b>Family Member #3</b> <br />
                Protection:Active
              </p>
            </div>
          </div>
        </div>
        <div className='first__submit'>
          <Link to='/'>
            <button>
              <i className='fa fa-arrow-left'></i>
              Submit Information for removal
            </button>
          </Link>
        </div>
      </div>
      <div className='heading__second'></div>
      <div className='heading__third'>
        <p className='third__heading1'>
          Your information processing status: Still awaiting processing
        </p>
        <p className='third__heading2'>
          Please note that your first removal progress alert usually will show
          up around 7 days after receiving your necessary information submitted
          on the Submit Removals page.
        </p>
      </div>
      <div className='heading__fourth'>
        <p className='fourth__heading1'>Privacy Report Schedule</p>
        <p className='fourth__heading2'>
          When your information removals are completed you will receive a
          privacy report to your email that you signed up with.
        </p>
        <div className='fourth__heading3'>
          <div className='heading3__card'>
            <p className='card__heading1'>current removal report</p>
            <p className='card__heading2'>Still Processing</p>
          </div>
          <div className='heading3__card'>
            <p className='card__heading1'>current removal report</p>
            <p className='card__heading2'>Still Processing</p>
          </div>
          <div className='heading3__card'>
            <p className='card__heading1'>current removal report</p>
            <p className='card__heading2'>Still Processing</p>
          </div>
        </div>
      </div>
      <div className='heading__fifth'>
        <p>Main Data Brokers</p>
      </div>
      <div className='heading__sixth'>
        <div className='sixth__card'>
          <img src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/09/mylifelogo.webp' />
          <p className='card__heading1'>Removal Progress</p>
          <p className='card__heading2'>Check back shortly</p>
        </div>
        <div className='sixth__card'>
          <img src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/09/whitepageslogo.webp' />
          <p className='card__heading1'>Removal Progress</p>
          <p className='card__heading2'>Check back shortly</p>
        </div>
        <div className='sixth__card'>
          <img src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/09/radarislogo.webp' />
          <p className='card__heading1'>Removal Progress</p>
          <p className='card__heading2'>Check back shortly</p>
        </div>
        <div className='sixth__card'>
          <img src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/09/spokeologo.webp' />
          <p className='card__heading1'>Removal Progress</p>
          <p className='card__heading2'>Check back shortly</p>
        </div>
        <div className='sixth__card'>
          <img src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/09/inteliuslogo.webp' />
          <p className='card__heading1'>Removal Progress</p>
          <p className='card__heading2'>Check back shortly</p>
        </div>
      </div>

      <div className='heading__seventh'>
        <p> Advanced Data Brokers</p>
      </div>

      <div className='heading__eighth'>
        <div className='eighth__card'>
          <img src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/09/clustrmapslogo-600x127.png' />
          <p className='card__heading1'>Removal Progress</p>
          <p className='card__heading2'>Check back shortly</p>
        </div>
        <div className='eighth__card'>
          <img
            className='classmates'
            src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/09/classmateslogo.webp'
          />
          <p className='card__heading1'>Removal Progress</p>
          <p className='card__heading2'>Check back shortly</p>
        </div>
        <div className='eighth__card'>
          <img src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/09/beenverifiedlogo.webp' />
          <p className='card__heading1'>Removal Progress</p>
          <p className='card__heading2'>Check back shortly</p>
        </div>
        <div className='eighth__card'>
          <img src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/09/ZoominfoLogo.webp' />
          <p className='card__heading1'>Removal Progress</p>
          <p className='card__heading2'>Check back shortly</p>
        </div>
        <div className='eighth__card'>
          <img src='https://mk0mycontentgua5v6j0.kinstacdn.com/wp-content/uploads/2020/09/peoplefinderslogo.webp' />
          <p className='card__heading1'>Removal Progress</p>
          <p className='card__heading2'>Check back shortly</p>
        </div>
      </div>
    </div>
  );
}
