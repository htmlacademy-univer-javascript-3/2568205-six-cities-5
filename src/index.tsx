import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
//import offers from './mocks/offers';
import { cities } from './mocks/cities';
import { configureAxios } from './api';
const axios = await configureAxios()
const response = await axios.get('/offers')
const offers=response.data
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={10} offers={offers} cities={cities} />
  </React.StrictMode>
);
