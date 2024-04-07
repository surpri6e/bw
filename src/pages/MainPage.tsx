import React from 'react';
import '../styles/pages/main.scss';
import About from '../components/About/About';
import Input from '../components/UI/Input/Input';
import Post from '../components/Post/Post';

const MainPage = () => {
   return (
      <div className='main'>
         <About />
         <div className='searching'>
            <Input placeholder='Search' type='text ' />
         </div>
         <div className='posts'>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
         </div>
      </div>
   );
};

export default MainPage;
