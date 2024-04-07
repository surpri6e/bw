import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/Header/Header';
import './styles/app.scss';
import Footer from './components/Footer/Footer';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './utils/configdb';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { DatabaseContext } from './contexts/DatabaseContext';

initializeApp(firebaseConfig);
const firestore = getFirestore();
const auth = getAuth();
const storage = getStorage();
const provider = new GoogleAuthProvider();

setTimeout(() => {
   console.log(provider);
}, 2000);

const App = () => {
   return (
      <DatabaseContext.Provider value={{ auth, firestore, storage }}>
         <BrowserRouter>
            <Header />
            <div className='content'>
               <div className='container'>
                  <AppRouter />
               </div>
            </div>
            <Footer />
         </BrowserRouter>
      </DatabaseContext.Provider>
   );
};

export default App;
