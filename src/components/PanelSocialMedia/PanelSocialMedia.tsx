import React from 'react';
import './panelSocialMedia.scss';
import google from '../../images/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { DatabaseContext } from '../../contexts/DatabaseContext';

const PanelSocialMedia = () => {
   const { auth } = React.useContext(DatabaseContext);
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   setTimeout(() => {
      console.log(user);
   }, 2000);
   return (
      <div className='panelSocialMedia'>
         <div className='panelSocialMediaLeft'>You can sign in with social</div>
         <div className='panelSocialMediaRight'>
            <div className='panelSocialMediaButton'>
               <img src={google} alt='Login with Google' className='panelSocialMediaButtonImage' onClick={() => signInWithGoogle()} />
            </div>
         </div>
      </div>
   );
};

export default PanelSocialMedia;
