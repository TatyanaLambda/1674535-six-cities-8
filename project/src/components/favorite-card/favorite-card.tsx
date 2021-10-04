import MarkFavoriteScreen from '../mark-favorite/mark-favorite';
import RatingScreen from '../rating/rating';

function FavoriteCardScreen() : JSX.Element{
  return(
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt="Place" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;180</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <MarkFavoriteScreen isFavorite />
        </div>
        <RatingScreen />
        <h2 className="place-card__name">
          <a href="/">Nice, cozy, warm big bed apartment</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}
export default FavoriteCardScreen;
