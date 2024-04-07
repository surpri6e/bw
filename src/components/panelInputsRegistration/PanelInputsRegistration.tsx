import React from 'react';
import './panelInputsRegistration.scss';
import Input from '../UI/Input/Input';
import { Link } from 'react-router-dom';
import { ROUTE_PATH_POLICY_PAGE } from '../../utils/routePaths';

const PanelInputsRegistration = () => {
   return (
      <>
         <div className='panelInputsRegistration'>
            <Input placeholder='Your name' type='text' />
            <Input placeholder='E-mail' type='text' />
            <Input placeholder='Password' type='text' />
         </div>
         <div className='panelAgree'>
            <input type='checkbox' className='panelAgreeInput' />
            <div>
               {' '}
               I accept the terms of the offer of{' '}
               <Link to={ROUTE_PATH_POLICY_PAGE} className='panelAgreeInputPolicy'>
                  the privacy policy
               </Link>
            </div>
         </div>
         <button className='panelInputsRegistrationButton'>Registration</button>
      </>
   );
};

export default PanelInputsRegistration;
