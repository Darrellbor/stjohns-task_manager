import styled, { css } from 'styled-components';
import { IModalStyleProps, IModalBackdropStyleProps, TModalWidth } from './types';
import colors from 'styles/colors';

const setWidth = (width?: TModalWidth) => {
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

const ModalCover = styled.div<{$width?: TModalWidth}>`
  overflow: auto;
  overflow-x: hidden;
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
  ${({ $width }) => setWidthForCover($width)}

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
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
