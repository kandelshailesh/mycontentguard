import { Link } from 'react-router-dom';
export const getMember = permission_level => {
  switch (permission_level) {
    case 1:
      break;
    case 2:
      return (
        <>
          <Link
            to={{
              pathname: '/removal-pages/family-member-1/',
              state: {
                value: 'Family Member#1',
              },
            }}
          >
            <button>Submit Family Member #1</button>
          </Link>
        </>
      );

    case 3:
    case 4:
      return (
        <>
          <Link
            to={{
              pathname: '/removal-pages/family-member-1/',
              state: {
                value: 'Family Member#1',
              },
            }}
          >
            <button>Submit Family Member #1</button>
          </Link>
          <Link
            to={{
              pathname: '/removal-pages/family-member-2/',
              state: {
                value: 'Family Member#2',
              },
            }}
          >
            <button>Submit Family Member #2</button>
          </Link>
          <Link
            to={{
              pathname: '/removal-pages/family-member-3/',
              state: {
                value: 'Family Member#3',
              },
            }}
          >
            <button>Submit Family Member #3</button>
          </Link>
        </>
      );
  }
};
