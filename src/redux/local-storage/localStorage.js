export const loadFavoritesFromLocalStorage = () => {
  const storedFavorites = localStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const saveFavoritesToLocalStorage = favorites => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
