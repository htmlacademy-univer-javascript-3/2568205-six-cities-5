import { Link } from "react-router-dom"
import { Offer } from "../../types/offer-types"
type CardProps = {
    offer: Offer
}
function Card({offer}: CardProps) : JSX.Element {
    return (
    <article className="cities__card place-card">
        <div className="place-card__mark">
            <span>{offer.type}</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
            <a href="#">
                <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
            </a>
        </div>
        <div className="place-card__info">
            <div className="place-card__price-wrapper">
                <div className="place-card__price">
                    <b className="place-card__price-value">{offer.price}</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                </button>
            </div>
            <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                    <span style={{ width: '100%' }}></span>
                    <span className="visually-hidden">{offer.rating}</span>
                </div>
            </div>
            <h2 className="place-card__name">
              <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
            </h2>
            <p className="place-card__type">{offer.type}</p>
        </div>
    </article>)
}
export default Card