import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
`;
export const FormTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 8px;
`;
export const FormSubTitle = styled.span`
  color: #475467;
  margin-bottom: 24px;
`;
export const FormInput = styled.input`
  border: none;
  outline: none;
  padding: 18px;
  border-radius: 10px;
  background-color: #f7f7f7;
  margin-bottom: 14px;
`;
export const FormTextArea = styled.textarea`
  border: none;
  outline: none;
  padding: 18px;
  border-radius: 10px;
  background-color: #f7f7f7;
  height: 114px;
  margin-bottom: 24px;
  resize: none;
`;
export const FormBtn = styled.button`
  width: 160px;
  background-color: #e44848;
  color: #ffffff;
  padding: 16px 60px;
  border-radius: 200px;
`;
