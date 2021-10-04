import GalleryScreen from '../gallery/gallery';
import HeaderNavNotLoggedScreen from '../header-nav-not-logged/header-nav-not-logged';
import HeaderNavScreen from '../header-nav/header-nav';
import InsideGoodsScreen from '../inside-goods/inside-goods';
import LogoScreen from '../logo/logo';
import MarkFavoriteInPropertyScreen from '../mark-favorite-in-property/mark-favorite-in-property';
import RatingScreen from '../rating/rating';
import ReviewsFormScreen from '../reviews-form/reviews-form';

type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

type City = {
  location: Location;
  name: string;
};

type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

type Place = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  isPremium: boolean;
  price: number;
  title: string;
  type: string;
  isFavorite: boolean;
  previewImage: string;
  images: string[];
  rating: number;
  maxAdults: number;
}

type User = {
  email: string;
  password: string;
}

type PlaceCardProps = {
  place: Place;
  user: User;
}

function PropertyNotLoggedScreen({place, user}: PlaceCardProps) : JSX.Element{
  return(
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <LogoScreen/>
            {user.email?<HeaderNavScreen/>:<HeaderNavNotLoggedScreen/>}
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {place.images.map((image) => <GalleryScreen key={0} image={image} />)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {place.title}
                </h1>
                <MarkFavoriteInPropertyScreen isFavorite={place.isFavorite}/>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{place.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {place.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {place.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {place.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{place.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {place.goods.map((good) => <InsideGoodsScreen key={0} good={good} />)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={place.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {place.host.name}
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {place.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                      </div>
                      <span className="reviews__user-name">
                        Max
                      </span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span className="width: 80%"></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                    </div>
                  </li>
                </ul>
                {user.email&&<ReviewsFormScreen/>}
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="/">
                    <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;80</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <RatingScreen/>
                  <h2 className="place-card__name">
                    <a href="/">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Private room</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default PropertyNotLoggedScreen;
