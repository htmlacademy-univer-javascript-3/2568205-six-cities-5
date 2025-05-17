import Login from "../../pages/login/login";
import Main from "../../pages/main/main"
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import OfferComponent from "../../pages/offer/offer";
import { Offer } from "../../types/offer-types";
import Favorites from "../../pages/favorites/favorites";
import NotFound from "../../pages/not-found/not-found";
import { AppRoute, AuthorizationStatus } from "../../const";
import PrivateRoute from "../private-route/private-route";

type AppProps = {
    placesCount: number,
    offers: Offer[]
}
function App({placesCount, offers}: AppProps) : JSX.Element {
return (
   <BrowserRouter>
   <Routes>
   <Route path={AppRoute.Root} element={<Main placesCount={placesCount} offers={offers} />}/>
   <Route path={AppRoute.Login} element={<Login />}/>
   <Route path={AppRoute.Offer} element={<OfferComponent offers={offers}/>}/>
   <Route path={AppRoute.Favorites} element={
    <PrivateRoute children={<Favorites />} authorizationStatus={AuthorizationStatus.NoAuth}/>}/>
   <Route path="*" element={<NotFound />}/>
   </Routes>
   </BrowserRouter>
)
}
export default App