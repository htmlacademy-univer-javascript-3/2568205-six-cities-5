import Login from "../../pages/login/login";
import Main from "../../pages/main/main"
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import OfferComponent from "../../pages/offer/offer";
import { Offer, City } from "../../types/offer-types";
import Favorites from "../../pages/favorites/favorites";
import NotFound from "../../pages/not-found/not-found";
import { AppRoute, AuthorizationStatus } from "../../const";
import PrivateRoute from "../private-route/private-route";
import { Provider } from "react-redux";
import store from "../../store"

type AppProps = {
    placesCount: number,
    offers: Offer[],
    cities: City[]
}
function App({placesCount, offers, cities}: AppProps) : JSX.Element {
return (
    <Provider store={store}>
   <BrowserRouter>
   <Routes>
   <Route path={AppRoute.Root} element={<Main placesCount={placesCount} offers={offers} cities={cities} />}/>
   <Route path={AppRoute.Login} element={<Login />}/>
   <Route path={AppRoute.Offer} element={<OfferComponent offers={offers}/>}/>
   <Route path={AppRoute.Favorites} element={
    <PrivateRoute children={<Favorites />} authorizationStatus={AuthorizationStatus.NoAuth}/>}/>
   <Route path="*" element={<NotFound />}/>
   </Routes>
   </BrowserRouter>
   </Provider>
)
}
export default App