import {
  IconBtnCategoriesAc,
  IconBtnCategoriesAutomatic,
  IconBtnCategoriesKitchen,
  IconBtnCategoriesShower,
  IconEquipmentTv,
  IconVehicleAlcove,
  IconVehicleFullyIntergrated,
  IconVehicleVan,
  IconBtnCategoriesUsers,
  IconEquipmentGas,
  IconBtnCategoriesBeds,
} from '.';

export const equipmentIcons = [
  { name: 'AC', iconComponent: IconBtnCategoriesAc },
  { name: 'Automatic', iconComponent: IconBtnCategoriesAutomatic },
  { name: 'Kitchen', iconComponent: IconBtnCategoriesKitchen },
  { name: 'Shower', iconComponent: IconBtnCategoriesShower },
  { name: 'TV', iconComponent: IconEquipmentTv },
];

export const vehicleTypeIcons = [
  { name: 'Alcove', iconComponent: IconVehicleAlcove },
  { name: 'Fully Intergrated', iconComponent: IconVehicleFullyIntergrated },
  { name: 'Van', iconComponent: IconVehicleVan },
];

export const allIcons = [
  {
    name: 'adults',
    displayName: 'adults',
    iconComponent: IconBtnCategoriesUsers,
  },
  {
    name: 'transmission',
    displayName: 'Automatic',
    iconComponent: IconBtnCategoriesAutomatic,
  },
  { name: 'engine', displayName: 'Petrol', iconComponent: IconEquipmentGas },
  {
    name: 'kitchen',
    displayName: 'Kitchen',
    iconComponent: IconBtnCategoriesKitchen,
  },
  { name: 'beds', displayName: 'beds', iconComponent: IconBtnCategoriesBeds },
  {
    name: 'airConditioner',
    displayName: '',
    iconComponent: IconBtnCategoriesAc,
  },
];
