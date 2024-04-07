import React from 'react';
import './header.scss';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import HeaderProfile from '../HeaderProfile/HeaderProfile';

const Header = () => {
   return (
      <div className='header'>
         <div className='container'>
            <div className='headerBody'>
               <div className='headerLeft'>
                  <Logo />
               </div>
               <div className='headerRight'>
                  <Link className='headerButton' to={'#'}>
                     Create post
                  </Link>
                  <HeaderProfile />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
