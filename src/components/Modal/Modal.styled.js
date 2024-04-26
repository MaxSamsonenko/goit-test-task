import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 47, 66, 0.4);
  z-index: 999;
`;
export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 982px;
  height: 720px;
`;
export const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1100;
`;
export const NameCloseBtnWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;
export const NameText = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
`;
export const ReviewLocationWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin-bottom: 16px;
`;
export const VanNamePrice = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 24px;
`;

export const ScrollAreaWrapper = styled.div`
  height: 499px;
  overflow: hidden;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    display: none;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; // Color of the track
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey; // Color of the scroll thumb
    border-radius: 10px; // Rounded corners of the scroll thumb
    border: 2px solid transparent; // Creates padding around the scroll thumb
    background-clip: content-box; // Ensures padding doesn't affect the color
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b0b0b0; // Color when hovered
  }
`;

export const VehicleImgList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
`;
export const VehicleImgListItem = styled.li`
  border-radius: 10px;
  overflow: hidden;
`;
export const VehicleImg = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
`;

export const VehicleDescr = styled.p`
  color: #475467;
  margin-bottom: 44px;
`;
export const BtnList = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  position: relative;
  margin-bottom: 68px;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 100%;
    height: 1px;
    background-color: rgba(16, 24, 40, 0.2);
    transition: background-color 0.3s ease;
  }
`;
export const BtnListItem = styled.li.attrs(props => ({}))`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 100%;
    height: 5px;
    background-color: transparent;
    background-color: ${props => (props.isActive ? '#e44848' : 'transparent')};
    transition: background-color 0.3s ease;
  }
`;
export const ModalBtn = styled.button`
  background-color: transparent;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
`;

export const TabWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
