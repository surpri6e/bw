import MainPage from '../pages/MainPage';
import PolicyPage from '../pages/PolicyPage';
import RegistrationPage from '../pages/RegistrationPage';
import { IRoute } from '../types/IRoute';
import { ROUTE_PATH_MAIN_PAGE, ROUTE_PATH_POLICY_PAGE, ROUTE_PATH_REGISTRATION_PAGE } from '../utils/routePaths';

export const publicRoutes: IRoute[] = [
   { path: ROUTE_PATH_MAIN_PAGE, element: MainPage },
   {
      path: ROUTE_PATH_REGISTRATION_PAGE,
      element: RegistrationPage,
   },
   {
      path: ROUTE_PATH_POLICY_PAGE,
      element: PolicyPage,
   },
];
