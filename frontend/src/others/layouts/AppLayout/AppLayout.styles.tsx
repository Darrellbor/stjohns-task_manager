import styled from 'styled-components';
import colors from 'styles/colors';

const AppLayoutContainer = styled.div`
  display: block;
  width: 100%;
  min-height: 600px;
  background-color: ${colors.backgroundColor};
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ContentContainer = styled.div`
  min-height: 600px;
  padding: 0 30px;
  padding-top: 20px;
`;

const LogoContainer = styled.div`
  padding: 20px;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 10px;
  margin: 0 40px;
  border-top: 1px solid ${colors.white};

  & a {
    color: ${colors.white};
    text-decoration: none;
  }
`;

export default {
  AppLayoutContainer,
  BodyContainer,
  ContentContainer,
  LogoContainer,
  FooterContainer,
};
