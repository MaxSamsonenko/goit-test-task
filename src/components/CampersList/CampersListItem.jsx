import React, { useState } from 'react';
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
  Img,
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

const CampersListItem = ({ openModal, camper }) => {
  const [liked, setLiked] = useState(false);
  const {
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

  const toggleLike = () => {
    setLiked(!liked);
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
  console.log(camper);

  return (
    <ListItem>
      <ImgWrapper>
        <Img src={gallery[0]} alt={name} />
      </ImgWrapper>
      <div>
        <NamePriceWrapper>
          <VanNamePrice>{name}</VanNamePrice>
          <PriceWrapper>
            <VanNamePrice>&#x24; {price}</VanNamePrice>
            <LikeBtn type="button" onClick={toggleLike}>
              <IconHeart
                width="24"
                height="24"
                fill={liked ? '#E44848' : 'transparent'}
                stroke={liked ? '#E44848' : '#101828'}
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
