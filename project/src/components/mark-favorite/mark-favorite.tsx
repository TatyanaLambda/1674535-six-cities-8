type FavotireProps = {
  isFavorite: boolean;
}

function MarkFavoriteScreen({isFavorite}: FavotireProps) : JSX.Element{

  if (isFavorite){
    return(
      <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
    );
  }
  return(
    <button className="place-card__bookmark-button button" type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
export default MarkFavoriteScreen;

