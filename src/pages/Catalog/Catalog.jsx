import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/selectors';

import { fetchAdverts } from '../../redux/operations';
import Modal from 'components/Modal';
import FilterForm from 'components/FilterForm';
import CampersList from 'components/CampersList';

import { CatalogWrapper } from './Catalog.styled';

const Catalog = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleOpenModal = camper => {
    setSelectedCamper(camper);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <CatalogWrapper>
      <div>
        <FilterForm />
      </div>
      <div>
        {isLoading && !error && <b>Request in progress...</b>}
        <CampersList openModal={handleOpenModal} />
        {isModalOpen && (
          <Modal closeModal={handleCloseModal} camper={selectedCamper} />
        )}
      </div>
    </CatalogWrapper>
  );
};

export default Catalog;
