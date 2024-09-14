import styled from 'styled-components';

export const CatalogWrapper = styled.div`
  display: flex;
  gap: 64px;
  padding-top: 30px;
  padding-bottom: 30px;
`;
export const CamperListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadMoreBtn = styled.button`
  border: none;
  outline: none;
  border-radius: 200px;
  background-color: transparent;
  border: 1px solid rgba(71, 84, 103, 0.2);
  padding: 16px 32px;
  color: #000000;
  font-weight: 500;
  width: 145px;
  &:hover {
    border: 1px solid #e44848;
  }
`;
