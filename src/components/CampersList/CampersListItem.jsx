import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFavorite,
  addFavorite,
  removeFavorite,
} from '../../redux/operations';
import {
  IconHeart,
  IconReviewStarIcon,
  IconMapLocationIcon,
  IconBtnCategoriesUsers,
  IconBtnCategoriesAutomatic,
  IconEquipmentGas,
  IconBtnCategoriesKitchen,
  IconBtnCategoriesBeds,
  IconBtnCategoriesAc,
} from '../../images/icons';

import {
  ListItem,
  ImgWrapper,
  NamePriceWrapper,
  VanNamePrice,
  PriceWrapper,
  LikeBtn,
  ReviewLocationWrapper,
  Descr,
  CategoryList,
  Category,
  ShowMoreBtn,
} from './CampersList.styled';
import { selectFavorites } from '../../redux/selectors';

const CampersListItem = ({ openModal, camper }) => {
  const [liked, setLiked] = useState(false);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  console.log(favorites);
  const {
    _id,
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    adults,
    transmission,
    engine,
    details,
  } = camper;

  useEffect(() => {
    dispatch(fetchFavorite());
  });

  const isFavorite = id => {
    return favorites.find(id => id === _id);
  };
  const toggleLike = id => {
    setLiked(!liked);
    isFavorite(_id)
      ? dispatch(removeFavorite(_id))
      : dispatch(addFavorite(_id));
  };

  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + '...';
    }
    return str;
  }
  function capitalizeFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <ListItem>
      <ImgWrapper image={gallery[0]}></ImgWrapper>
      <div>
        <NamePriceWrapper>
          <VanNamePrice>{name}</VanNamePrice>
          <PriceWrapper>
            <VanNamePrice>&#x24; {price}</VanNamePrice>
            <LikeBtn
              type="button"
              onClick={() => {
                toggleLike(_id);
              }}
            >
              <IconHeart
                width="24"
                height="24"
                fill={isFavorite(_id) ? '#E44848' : 'transparent'}
                stroke={isFavorite(_id) ? '#E44848' : '#101828'}
              />
            </LikeBtn>
          </PriceWrapper>
        </NamePriceWrapper>
        <ReviewLocationWrapper>
          <span>
            <IconReviewStarIcon />
            {rating}({reviews.length} Reviews)
          </span>
          <span>
            <IconMapLocationIcon />
            {location}
          </span>
        </ReviewLocationWrapper>
        <Descr>{truncateString(description, 60)}</Descr>

        <CategoryList>
          <Category>
            <IconBtnCategoriesUsers width="20" height="20" />
            <span>{adults} adults</span>
          </Category>
          <Category>
            <IconBtnCategoriesAutomatic width="20" height="20" />{' '}
            <span>{capitalizeFirstLetter(transmission)}</span>
          </Category>
          <Category>
            <IconEquipmentGas width="20" height="20" />
            <span>{capitalizeFirstLetter(engine)}</span>
          </Category>
          <Category>
            <IconBtnCategoriesKitchen width="20" height="20" />
            <span>Kitchen</span>
          </Category>
          <Category>
            <IconBtnCategoriesBeds width="20" height="20" />
            <span>{details.beds} beds</span>
          </Category>
          <Category>
            <IconBtnCategoriesAc width="20" height="20" />
            <span>AC</span>
          </Category>
        </CategoryList>
        <ShowMoreBtn type="button" onClick={() => openModal(camper)}>
          Show more
        </ShowMoreBtn>
      </div>
    </ListItem>
  );
};
export default CampersListItem;
