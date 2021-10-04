import MainCompleted from '../main-completed/main-completed';
import HeaderNavScreen from '../header-nav/header-nav';
import LogoScreen from '../logo/logo';

const PlaceTypes = {
  apartment: 'Apartment',
  room: 'Private room',
  house: 'House',
  hotel: 'Hotel',
};

const places =
  [
    {
      id: 1,
      isPremium: true,
      price: 120,
      title: 'Beautiful &amp; luxurious apartment at great location',
      type: PlaceTypes.apartment,
      isFavorite: false,
      previewImage: 'img/apartment-01.jpg',
    },{
      id: 2,
      isPremium: false,
      price: 80,
      title: 'Wood and stone place',
      type: PlaceTypes.room,
      isFavorite: true,
      previewImage: 'img/room.jpg',
    },
    {
      id: 3,
      isPremium: false,
      price: 132,
      title: 'Canal View Prinsengracht',
      type: PlaceTypes.apartment,
      isFavorite: false,
      previewImage: 'img/apartment-02.jpg',
    },
    {
      id: 4,
      isPremium: true,
      price: 180,
      title: 'Nice, cozy, warm big bed apartment',
      type: PlaceTypes.apartment,
      isFavorite: false,
      previewImage: 'img/apartment-03.jpg',
    },
    {
      id: 5,
      isPremium: false,
      price: 80,
      title: 'Wood and stone place',
      type: PlaceTypes.room,
      isFavorite: true,
      previewImage: 'img/room.jpg',
    },
  ];

function MainScreen() : JSX.Element{
  return(
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <LogoScreen/>
            <HeaderNavScreen/>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active"  href="/">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <MainCompleted places={places}/>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
