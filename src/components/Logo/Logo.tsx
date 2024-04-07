import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_PATH_MAIN_PAGE } from '../../utils/routePaths';
import './logo.scss';

const Logo = () => {
   return (
      <Link className='logo' to={ROUTE_PATH_MAIN_PAGE}>
         BW
      </Link>
   );
};

export default Logo;
