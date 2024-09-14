import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LocationLabel = styled.label`
  font-weight: 500;
  opacity: 0.6;
  margin-bottom: 8px;
`;
export const IconWrapper = styled.div`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
`;
export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 32px;
`;
export const LocationInput = styled.input`
  width: 360px;
  padding: 18px 18px 18px 44px;
  background-color: #f7f7f7;
  border: none;
  outline: none;
  border-radius: 10px;
  &::placeholder {
    line-height: 1.25;
    color: #101828;
  }
`;

export const Filters = styled.span`
  color: #475467;
  margin-bottom: 14px;
`;
export const SubTitle = styled.h2`
  position: relative;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 48px;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 100%;
    height: 1px;
    background-color: #101828;
    opacity: 0.1;
  }
`;

export const CheckBoxList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 10px;
  margin-bottom: 32px;
`;
export const CheckBoxListItem = styled.li`
  flex-basis: calc((100% - 20px) / 3);
`;
export const Label = styled.label`
  flex-basis: calc((100% - 20px) / 3);
`;
export const SubmitBtn = styled.button`
  border: none;
  outline: none;
  border-radius: 200px;
  background-color: #e44848;
  padding: 16px 60px;
  color: #ffffff;
  font-weight: 500;
  width: 173px;
  &:hover {
    background-color: #d84343;
  }
`;
