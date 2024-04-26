import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #f2f4f7;
  border-bottom: 1px solid #475467;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 5px 64px 5px 64px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  //   padding: 20px;
  width: 100%;
`;
export const Link = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: #101828;
  }
`;
export const MainContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 64px;
  padding-right: 64px;
`;
