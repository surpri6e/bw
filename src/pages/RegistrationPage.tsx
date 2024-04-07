import React from 'react';
import PanelSocialMedia from '../components/PanelSocialMedia/PanelSocialMedia';
import PanelInputsRegistration from '../components/panelInputsRegistration/PanelInputsRegistration';
import '../styles/pages/registration.scss';
import PanelInputsLogin from '../components/panelInputsLogin/PanelInputsLogin';
import PanelSwitch from '../components/panelSwitch/PanelSwitch';

const RegistrationPage = () => {
   const [isLogin, setIsLogin] = React.useState<boolean>(true);

   return (
      <div className='registration'>
         <div className='panel'>
            <div className='panelContainer'>
               <div className='panelTitle'>Profile</div>
               <PanelSwitch isLogin={isLogin} setIsLogin={setIsLogin} />
               <PanelSocialMedia />
               {isLogin ? <PanelInputsRegistration /> : <PanelInputsLogin />}
            </div>
         </div>
      </div>
   );
};

export default RegistrationPage;
