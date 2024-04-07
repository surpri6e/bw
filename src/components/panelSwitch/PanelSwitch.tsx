import React from 'react';
import './panelSwitch.scss';

interface IPanelSwitch {
   isLogin: boolean;
   setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const PanelSwitch: React.FC<IPanelSwitch> = ({ isLogin, setIsLogin }) => {
   return (
      <div className='panelSwitch'>
         <button className={isLogin ? 'panelSwitchButton activePanelSwitchButton' : 'panelSwitchButton'} onClick={() => setIsLogin(true)}>
            Registration
         </button>
         <button className={isLogin ? 'panelSwitchButton' : 'panelSwitchButton activePanelSwitchButton'} onClick={() => setIsLogin(false)}>
            Login
         </button>
      </div>
   );
};

export default PanelSwitch;
