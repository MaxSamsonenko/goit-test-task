import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  gap: 24px;
  padding: 24px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  margin-bottom: 32px;
`;
export const ImgWrapper = styled.div`
  width: 290px;
  flex-shrink: 0;
  flex-basis: auto;
  border-radius: 10px;
  overflow: hidden;
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-size: 100% 100%;
`;

export const Img = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
`;
export const NamePriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const VanNamePrice = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;
export const PriceWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const LikeBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
`;
export const ReviewLocationWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Descr = styled.p`
  color: #475467;
  margin-bottom: 24px;
`;

export const CategoryList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const Category = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: #f2f4f7;
  border-radius: 100px;
  padding: 12px 18px;
  font-weight: 500;
`;

export const ShowMoreBtn = styled.button`
  border: none;
  outline: none;
  border-radius: 200px;
  background-color: #e44848;
  padding: 16px 40px;
  color: #ffffff;
  font-weight: 500;
  width: 166px;
  &:hover {
    background-color: #d84343;
  }
`;
