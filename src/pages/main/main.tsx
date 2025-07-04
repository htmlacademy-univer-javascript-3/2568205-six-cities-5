import { useCallback, useEffect, useState } from 'react';
import Card from '../../components/card/card'
import Map from '../../components/map';
import { Tabs } from '../../components/tabs';
import { City, Offer } from '../../types/offer-types';
type MainScreenProps = {
  placesCount: number,
  offers: Offer[],
  cities: City[]
}
function Main({placesCount, offers, cities}: MainScreenProps): JSX.Element {
  const [activeCity, setActiveCity] = useState<City>(cities[0])
  console.log(activeCity)
  console.log(offers)
  const getfiltered = useCallback(()=>offers.filter(offer=>offer.city.name==activeCity.name), [offers, activeCity])
  const [fillerredOffers, setFilteredOffers] = useState<Offer[]>(getfiltered())
  useEffect(() => {
setFilteredOffers(getfiltered())
  }, [getfiltered])
  console.log(fillerredOffers)
    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active" href="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
  
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
             <Tabs cities={cities} activeCity={activeCity} setActiveCity={setActiveCity} />
             
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{fillerredOffers.length} places to stay in {activeCity.name}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  {/* <ul className="places__options places__options--custom places__options--opened"> */}
                  <ul className="places__options places__options--custom">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
               {fillerredOffers.map(offer=><Card offer={offer}/>)}              
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                <Map 
                  city={activeCity} 
                  points={fillerredOffers.map(offer=>offer.location)}
              
                  selectedPoint={undefined}
                />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  export default Main;


