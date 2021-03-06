import HeaderNavScreen from '../header-nav/header-nav';
import LogoScreen from '../logo/logo';
import FavoritesListElementScreen from '../favorites-list-element/favorites-list-element';

function FavoritesPlacesScreen() : JSX.Element{
  return(
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <LogoScreen />
            <HeaderNavScreen />
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesListElementScreen />
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
export default FavoritesPlacesScreen;
