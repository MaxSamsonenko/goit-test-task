import styled from 'styled-components';

export const CheckBoxWrap = styled.div`
  position: relative;
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Customcheckbox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props =>
    props.checked ? '1px solid #E44848' : '1px solid rgba(16, 24, 40, 0.2)'};
  border-radius: 10px;
  padding-top: ${props => (props.padding === 'true' ? '0' : '17.5px')};
  padding-bottom: 17.5px;
  text-align: center;
`;
export const IconTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrap = styled.span`
  margin-top: 8px;
  font-weight: 500;
  line-height: 1.25;
`;
