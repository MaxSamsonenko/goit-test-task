import { Outlet } from 'react-router-dom';
import SiteLogo from 'components/icons/Logo';

import {
  Container,
  MainContainer,
  Nav,
  NavWrapper,
  LinkWrapper,
  Link,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <Nav>
          <Container>
            <NavWrapper>
              <Link to="/">
                <SiteLogo width="130" height="35" />
              </Link>
              <LinkWrapper>
                <Link to="/" end>
                  Home
                </Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/favorites">Favorites</Link>
              </LinkWrapper>
            </NavWrapper>
          </Container>
        </Nav>
      </header>
      <main>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </main>
    </div>
  );
};
export default SharedLayout;
