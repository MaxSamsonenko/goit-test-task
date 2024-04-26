import {
  CheckBoxWrap,
  Customcheckbox,
  Input,
  IconTextWrap,
  TextWrap,
} from './Checkbox.styled';

const Checkbox = ({
  id,
  name,
  type,
  value,
  checked,
  onChange,
  padding = 'false',
  IconComponent,
}) => {
  return (
    <CheckBoxWrap>
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Customcheckbox
        checked={checked}
        onClick={event => onChange(event)}
        padding={padding}
      >
        <IconTextWrap>
          {IconComponent && <IconComponent width="32" height="32" />}
          {type === 'radio' ? (
            <TextWrap>{value}</TextWrap>
          ) : (
            <TextWrap>{name}</TextWrap>
          )}
        </IconTextWrap>
      </Customcheckbox>
    </CheckBoxWrap>
  );
};
export default Checkbox;
