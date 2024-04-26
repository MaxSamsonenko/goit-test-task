import styled from 'styled-components';
export const TabWrapper = styled.div`
  width: 430px;
`;

export const CategoryList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const Category = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: #f2f4f7;
  border-radius: 100px;
  padding: 12px 18px;
  font-weight: 500;
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
export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;
export const StatsDetails = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
