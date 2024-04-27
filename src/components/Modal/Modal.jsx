import React, { useState, useEffect } from 'react';

import FeaturesTab from 'components/FeaturesTab';
import ReviewsTab from 'components/ReviewsTab';
import BookForm from 'components/BookForm';
import {
  IconCloseButton,
  IconReviewStarIcon,
  IconMapLocationIcon,
} from 'images/icons';
import {
  Backdrop,
  ModalWindow,
  ModalContent,
  NameCloseBtnWrapper,
  NameText,
  CloseButton,
  ReviewLocationWrapper,
  VanNamePrice,
  ScrollAreaWrapper,
  VehicleImgList,
  VehicleImgListItem,
  VehicleImg,
  VehicleDescr,
  BtnList,
  BtnListItem,
  ModalBtn,
  TabWrapper,
} from './Modal.styled';

const Modal = ({ closeModal, camper }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  const [activeTab, setActiveTab] = useState('features');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  const { gallery, name, price, rating, reviews, location, description } =
    camper;
  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        <ModalContent>
          <NameCloseBtnWrapper>
            <NameText>{name}</NameText>
            <CloseButton type="button" onClick={closeModal}>
              <IconCloseButton />
            </CloseButton>
          </NameCloseBtnWrapper>
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
          <VanNamePrice>&#x24; {price}</VanNamePrice>
          <ScrollAreaWrapper>
            <VehicleImgList>
              {gallery.map((img, index) => {
                return (
                  <VehicleImgListItem key={index}>
                    <VehicleImg src={img} alt={`view ${index}`} />
                  </VehicleImgListItem>
                );
              })}
            </VehicleImgList>
            <VehicleDescr>{description}</VehicleDescr>
            <BtnList>
              <BtnListItem isActive={activeTab === 'features'}>
                <ModalBtn
                  type="button"
                  onClick={() => handleTabClick('features')}
                >
                  Features
                </ModalBtn>
              </BtnListItem>
              <BtnListItem isActive={activeTab === 'reviews'}>
                <ModalBtn
                  type="button"
                  onClick={() => handleTabClick('reviews')}
                >
                  Reviews
                </ModalBtn>
              </BtnListItem>
            </BtnList>
            <TabWrapper>
              {activeTab === 'features' ? (
                <FeaturesTab camper={camper} />
              ) : (
                <ReviewsTab />
              )}
              <BookForm />
            </TabWrapper>
          </ScrollAreaWrapper>
        </ModalContent>
      </ModalWindow>
    </Backdrop>
  );
};
export default Modal;
