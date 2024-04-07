import MainPage from '../pages/MainPage';
import { IRoute } from '../types/IRoute';
import { ROUTE_PATH_MAIN_PAGE } from '../utils/routePaths';

export const privateRoutes: IRoute[] = [{ path: ROUTE_PATH_MAIN_PAGE, element: MainPage }];
