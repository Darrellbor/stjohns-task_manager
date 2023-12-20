import React from 'react';
import { Outlet } from 'react-router';
import styles from './AppLayout.styles';

const { AppLayoutContainer, BodyContainer, ContentContainer, LogoContainer, FooterContainer } =
  styles;

const AppLayout: React.FC = () => {
  return (
    <AppLayoutContainer className="AppLayout" data-testid="test-AppLayout">
      <BodyContainer>
        <ContentContainer>
          <Outlet />
        </ContentContainer>

        <LogoContainer>
          <img src="/images/stjohnslogo.png" alt="St John Logo" />
        </LogoContainer>
      </BodyContainer>

      <FooterContainer>
        <a href="https://www.stjohnberchmans.de" target="_blank" rel="noreferrer">
          Welcome!
        </a>
        <a href="https://www.stjohnberchmans.de/about/" target="_blank" rel="noreferrer">
          About Us
        </a>
        <a href="https://www.stjohnberchmans.de/about_our_patron/" target="_blank" rel="noreferrer">
          About Our Patron St. John Berchmans
        </a>
        <a href="https://www.stjohnberchmans.de/contact/" target="_blank" rel="noreferrer">
          Finding and Contacting Us
        </a>
        <a
          href="https://www.stjohnberchmans.de/impressum-imprint/"
          target="_blank"
          rel="noreferrer">
          Imprint and Data Protection
        </a>
      </FooterContainer>
    </AppLayoutContainer>
  );
};

export default AppLayout;
