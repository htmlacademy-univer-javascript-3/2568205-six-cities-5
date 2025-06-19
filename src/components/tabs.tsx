import { City } from "../types/offer-types"
import { Tab } from "./tab"

type TabProps = {
cities: City[]
activeCity: City
setActiveCity: (city:City) => void
}
export function Tabs({cities, activeCity, setActiveCity}:TabProps) : JSX.Element {
return (
    <ul className="locations__list tabs__list">
        {cities.map((city:City)=>
        <Tab city={city.name} isActiveCity={city.name==activeCity.name} changeActiveCity={()=>setActiveCity(city)} />)}
        </ul>
)
}