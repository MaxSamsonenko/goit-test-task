import React, { useState } from 'react';
import Checkbox from './Checkbox';
import { IconMapLocationIcon } from 'images/icons';

import { equipmentIcons, vehicleTypeIcons } from 'images/icons/icons';

import {
  Form,
  LocationLabel,
  IconWrapper,
  InputWrapper,
  LocationInput,
  Filters,
  SubTitle,
  CheckBoxList,
  CheckBoxListItem,
  Label,
  SubmitBtn,
} from './FilterForm.styled';

const FilterForm = () => {
  const [checkboxStates, setCheckboxStates] = useState(
    new Array(5).fill(false)
  );
  const [vehicleType, setVehicleType] = useState('');

  const handleCheckboxChange = index => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };
  const handleRadioChange = event => {
    setVehicleType(event.target.value);
  };

  return (
    <Form>
      <LocationLabel name="location">Location</LocationLabel>
      <InputWrapper>
        <IconWrapper>
          <IconMapLocationIcon />
        </IconWrapper>
        <LocationInput type="text" placeholder="Kyiv, Ukraine" />
      </InputWrapper>

      <Filters>Filters</Filters>
      <div>
        <SubTitle>Vehicle equipment</SubTitle>
        <CheckBoxList>
          {checkboxStates.map((checked, index) => (
            <CheckBoxListItem key={index}>
              <Checkbox
                name={equipmentIcons[index].name}
                type="checkbox"
                checked={checked}
                onChange={() => handleCheckboxChange(index)}
                IconComponent={equipmentIcons[index].iconComponent}
              />
            </CheckBoxListItem>
          ))}
        </CheckBoxList>
      </div>
      <div>
        <SubTitle>Vehicle Type</SubTitle>
        <CheckBoxList>
          {/* <Label htmlFor="van">Van</Label> */}
          <CheckBoxListItem>
            <Label>
              <Checkbox
                id="van"
                type="radio"
                name="vehicleType"
                value="van"
                checked={vehicleType === 'van'}
                onChange={handleRadioChange}
                IconComponent={vehicleTypeIcons[0].iconComponent}
              />
            </Label>
          </CheckBoxListItem>

          {/* <Label htmlFor="fully-intergrated">Fully Integrated</Label> */}
          <Label>
            <Checkbox
              id="fully-intergrated"
              type="radio"
              name="vehicleType"
              value="fully-integrated"
              checked={vehicleType === 'fully-integrated'}
              onChange={handleRadioChange}
              padding="true"
              IconComponent={vehicleTypeIcons[1].iconComponent}
            />
          </Label>

          {/* <Label htmlFor="alcove">Alcove</Label> */}
          <Label>
            <Checkbox
              id="alcove"
              type="radio"
              name="vehicleType"
              value="alcove"
              checked={vehicleType === 'alcove'}
              onChange={handleRadioChange}
              IconComponent={vehicleTypeIcons[2].iconComponent}
            />
          </Label>
        </CheckBoxList>
      </div>
      <SubmitBtn type="submit">Search</SubmitBtn>
    </Form>
  );
};

export default FilterForm;
