type FavotireProps = {
  isFavorite: boolean;
}

function MarkFavoriteInPropertyScreen({isFavorite}: FavotireProps) : JSX.Element{
  if (isFavorite){
    return(
      <button className="property__bookmark-button property__bookmark-button--active button" type="button">
        <svg className="property__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
    );
  }
  return(
    <button className="property__bookmark-button button" type="button">
      <svg className="property__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );

}
export default MarkFavoriteInPropertyScreen;
