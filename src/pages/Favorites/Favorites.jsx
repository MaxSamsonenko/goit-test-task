import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors.js';

const Favorites = () => {
  const favs = useSelector(selectFavorites);

  console.log(favs);
  return <p>Favorites page</p>;
};

export default Favorites;
