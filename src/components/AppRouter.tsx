import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes } from '../routes/privateRoutes';
import { publicRoutes } from '../routes/publicRoutes';

const AppRouter = () => {
   const login: boolean = false;
   return (
      <Routes>
         {login
            ? privateRoutes.map((routeElement) => <Route key={routeElement.path} element={<routeElement.element />} path={routeElement.path} />)
            : publicRoutes.map((routeElement) => <Route key={routeElement.path} element={<routeElement.element />} path={routeElement.path} />)}
      </Routes>
   );
};

export default AppRouter;
