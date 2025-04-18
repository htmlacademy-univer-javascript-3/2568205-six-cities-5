import Login from "../../pages/login/login";
import Main from "../../pages/main/main"
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Offer from "../../pages/offer/offer";
import Favorites from "../../pages/favorites/favorites";
import NotFound from "../../pages/not-found/not-found";
import { AppRoute, AuthorizationStatus } from "../../const";
import PrivateRoute from "../private-route/private-route";

type AppProps = {
    placesCount: number
}
function App({placesCount}: AppProps) : JSX.Element {
return (
   <BrowserRouter>
   <Routes>
   <Route path={AppRoute.Root} element={<Main placesCount={placesCount} />}/>
   <Route path={AppRoute.Login} element={<Login />}/>
   <Route path={AppRoute.Offer} element={<Offer/>}/>
   <Route path={AppRoute.Favorites} element={
    <PrivateRoute children={<Favorites />} authorizationStatus={AuthorizationStatus.NoAuth}/>}/>
   <Route path="*" element={<NotFound />}/>
   </Routes>
   </BrowserRouter>
)
}
export default App