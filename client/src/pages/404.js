import ErrorRobot from '../components/404/ErrorRobot';
import { NavLink } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <ErrorRobot />
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>
        Page doesn't exist
      </p>
      <NavLink
        style={{
          display: 'block',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '24px',
          marginTop: '30px',
        }}
        to='/'
      >
        Back to main page
      </NavLink>
    </div>
  );
};

export default Page404;
