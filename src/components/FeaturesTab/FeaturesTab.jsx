import {
  TabWrapper,
  CategoryList,
  Category,
  SubTitle,
  Stats,
  StatsDetails,
} from './FeaturesTab.styled';

import {
  IconBtnCategoriesUsers,
  IconBtnCategoriesAutomatic,
  IconBtnCategoriesGas,
  IconBtnCategoriesKitchen,
  IconBtnCategoriesBeds,
  IconBtnCategoriesAc,
  IconBtnCategoriesHotelAirConditioner,
  IconBtnCategoriesCd,
  IconBtnCategories2Hob,
  IconBtnCategoriesRadio,
} from 'images/icons';

const FeaturesTab = ({ camper }) => {
  return (
    <TabWrapper>
      <div>
        <CategoryList>
          <li>
            <Category>
              <IconBtnCategoriesUsers width="20" height="20" />2 adults
            </Category>
          </li>
          <li>
            <Category>
              <IconBtnCategoriesAutomatic width="20" height="20" />
              Automatic
            </Category>
          </li>
          <li>
            <Category>
              <IconBtnCategoriesGas width="20" height="20" />
              Petrol
            </Category>
          </li>
          <li>
            <Category>
              <IconBtnCategoriesKitchen width="20" height="20" />
              Kitchen
            </Category>
          </li>
          <li>
            <Category>
              <IconBtnCategoriesBeds width="20" height="20" />1 beds
            </Category>
          </li>
          <li>
            <Category>
              <IconBtnCategoriesAc width="20" height="20" />
              AC
            </Category>
          </li>
          <li>
            <Category>
              <IconBtnCategoriesHotelAirConditioner width="20" height="20" />1
              air conditioner
            </Category>
          </li>
          <li>
            <Category>
              <IconBtnCategoriesCd width="20" height="20" />
              CD
            </Category>
          </li>
          <li>
            <Category>
              <IconBtnCategoriesRadio width="20" height="20" />
              Radio
            </Category>
          </li>
          <li>
            <Category>
              <IconBtnCategories2Hob width="20" height="20" />2 hob
            </Category>
          </li>
        </CategoryList>
      </div>
      <div>
        <SubTitle>Vehicle details</SubTitle>
        <Stats>
          <StatsDetails>Form</StatsDetails>
          <StatsDetails>Panel truck</StatsDetails>
        </Stats>
        <Stats>
          <StatsDetails>Length</StatsDetails>
          <StatsDetails>5.4m</StatsDetails>
        </Stats>
        <Stats>
          <StatsDetails>Width</StatsDetails>
          <StatsDetails>2.01m</StatsDetails>
        </Stats>
        <Stats>
          <StatsDetails>Height</StatsDetails>
          <StatsDetails>2.05m</StatsDetails>
        </Stats>
        <Stats>
          <StatsDetails>Tank</StatsDetails>
          <StatsDetails>132I</StatsDetails>
        </Stats>
        <Stats>
          <StatsDetails>Consumption</StatsDetails>
          <StatsDetails>12.4I/100km</StatsDetails>
        </Stats>
      </div>
    </TabWrapper>
  );
};
export default FeaturesTab;
