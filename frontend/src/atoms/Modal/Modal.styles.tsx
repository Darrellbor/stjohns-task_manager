import styled, { css } from 'styled-components';
import { IModalStyleProps, IModalBackdropStyleProps, TModalWidth } from './types';
import colors from 'styles/colors';
import breakpoints from 'styles/breakpoints';

const setWidth = (width?: TModalWidth, small?: boolean) => {
  if (small) {
    return css`
      max-width: 100%;
    `;
  }

  if (width && width === 'Small') {
    return css`
      max-width: 400px;
    `;
  } else if (width && width === 'Large') {
    return css`
      max-width: 800px;
    `;
  } else {
    return css`
      max-width: 600px;
    `;
  }
};

const setWidthForCover = (width?: TModalWidth) => {
  if (width && width === 'Small') {
    return css`
      max-width: 430px;
    `;
  } else if (width && width === 'Large') {
    return css`
      max-width: 830px;
    `;
  } else {
    return css`
      max-width: 630px;
    `;
  }
};

const ModalBackdrop = styled.div<IModalBackdropStyleProps>`
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: ${({ $isOpen }) => ($isOpen ? 'scale(1)' : 'scale(0)')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  background-color: ${colors.modalBackdrop};
`;

const ModalCover = styled.div<{ $width?: TModalWidth }>`
  overflow-y: auto;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  min-height: 600px;
  padding: 80px 0;
  ${({ $width }) => setWidthForCover($width)};
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
    width: 0;
    height: 0;
  }
`;

const ModalElement = styled.div<IModalStyleProps>`
  background-color: ${colors.white};
  min-height: 550px;
  width: 100%;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;
  padding: 15px;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0px)' : 'translateY(-9000px)')};
  ${({ $width }) => setWidth($width)}

  @media(max-width: ${breakpoints.md}) {
    width: auto;
    ${({ $width }) => setWidth($width, true)}
  }
`;

const ModalHeading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  align-items: center;

  & h2 {
    text-transform: capitalize;
  }

  & svg {
    cursor: pointer;
  }
`;

export default {
  ModalBackdrop,
  ModalCover,
  ModalElement,
  ModalHeading,
};
