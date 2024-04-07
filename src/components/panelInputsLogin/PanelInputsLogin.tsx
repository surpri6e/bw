import React from 'react';
import Input from '../UI/Input/Input';
import './panelInputsLogin.scss';

const PanelInputsLogin = () => {
   return (
      <>
         <div className='panelInputsLogin'>
            <Input placeholder='E-mail' type='text' />
            <Input placeholder='Password' type='text' />
         </div>
         <button className='panelInputsLoginButton'>Log in</button>
      </>
   );
};

export default PanelInputsLogin;
