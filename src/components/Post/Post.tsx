import React from 'react';
import './post.scss';
import { Link } from 'react-router-dom';

const Post = () => {
   return (
      <div className='post'>
         <img className='postImage' src='https://fakeimg.pl/600x400' alt='Slide of post' />
         <div className='postContainer'>
            <div className='postCreator'>
               <Link to={'#'} className='postCreatorAvatar'>
                  <img src='https://fakeimg.pl/600x420' alt='Creator of post' />
               </Link>
               <div className='postCreatorName'>David</div>
            </div>
            <div className='postContent'>
               <Link className='postTitle' to={'#'}>
                  How create react app?
               </Link>
               <div className='postDate'>11.11.2011</div>
               <div className='postButtons'>
                  <Link to={'#'} className='postButtonsRead'>
                     Read
                  </Link>
                  <Link to={'#'}>Like</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Post;
