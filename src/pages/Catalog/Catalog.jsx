import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectAdverts,
} from '../../redux/selectors';

import { fetchAdverts } from '../../redux/operations';
import Modal from 'components/Modal';
import FilterForm from 'components/FilterForm';
import CampersList from 'components/CampersList';

import {
  CatalogWrapper,
  CamperListWrapper,
  LoadMoreBtn,
} from './Catalog.styled';

const Catalog = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const adverts = useSelector(selectAdverts);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      dispatch(fetchAdverts({ page }));
    } else if (page > 1) {
      dispatch(fetchAdverts({ page }));
    }
  }, [dispatch, page]);

  const handleOpenModal = camper => {
    setSelectedCamper(camper);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const hadleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <CatalogWrapper>
      <div>
        <FilterForm />
      </div>
      <CamperListWrapper>
        {isLoading && !error && <b>Request in progress...</b>}
        <CampersList openModal={handleOpenModal} campers={adverts} />
        {page === 4
          ? null
          : isLoading || (
              <LoadMoreBtn onClick={hadleLoadMore}>Load more</LoadMoreBtn>
            )}

        {isModalOpen && (
          <Modal closeModal={handleCloseModal} camper={selectedCamper} />
        )}
      </CamperListWrapper>
    </CatalogWrapper>
  );
};

export default Catalog;
