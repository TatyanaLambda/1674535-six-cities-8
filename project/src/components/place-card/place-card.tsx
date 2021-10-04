import MarkFavoriteScreen from '../mark-favorite/mark-favorite';
import PremiumScreen from '../premium/premium';
import RatingScreen from '../rating/rating';

type Place = {
  isPremium: boolean
  price: number;
  title: string;
  type: string;
  isFavorite: boolean;
  previewImage: string;
}

type PlaceCardProps = {
  key: number;
  place: Place;
}

function PlaceCardScreen({key, place}: PlaceCardProps) : JSX.Element{
  return(
    <article className="cities__place-card place-card">
      {place.isPremium && <PremiumScreen />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={place.previewImage} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <MarkFavoriteScreen isFavorite={place.isFavorite}/>
        </div>
        <RatingScreen />
        <h2 className="place-card__name">
          <a href="/">{place.title}</a>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}

export default PlaceCardScreen;
