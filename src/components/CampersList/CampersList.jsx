import { useSelector } from 'react-redux';
// import { selectAdverts } from 'redux/selectors.js';
import CampersListItem from './CampersListItem';

const CampersList = ({ openModal }) => {
  const adverts = useSelector(state => state.adverts.items);
  console.log(adverts);
  return (
    <ul>
      {adverts.map(advert => {
        return (
          <CampersListItem
            openModal={() => openModal(advert)}
            key={advert._id}
            camper={advert}
          />
        );
      })}
    </ul>
  );
};

export default CampersList;
