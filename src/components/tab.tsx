type TabProps = {
    city: string;
    isActiveCity: boolean
    changeActiveCity: ()=> void
}
export function Tab({city, isActiveCity, changeActiveCity}:TabProps): JSX.Element {
    return (
        <li className="locations__item" onClick={changeActiveCity}>
        <a className={`locations__item-link tabs__item ${isActiveCity ? 'tabs__item--active' : ''}`} href="#">
          <span>{city}</span>
        </a>
      </li>
    )
}