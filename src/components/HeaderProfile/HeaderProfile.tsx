import React from 'react';
import './headerProfile.scss';
import { Link } from 'react-router-dom';

const HeaderProfile = () => {
   const trust = false;
   return trust ? (
      <Link className='headerProfile' to={'#'}></Link>
   ) : (
      <Link className='headerRegistration' to={'/registration'}>
         Log in
      </Link>
   );
};

export default HeaderProfile;
