import React from 'react';
import { IModalProps } from './types';
import styles from './Modal.styles';
import { ModalClose } from 'atoms/Icons/ModalClose';

const { ModalBackdrop, ModalCover, ModalElement, ModalHeading } = styles;

const Modal: React.FC<IModalProps> = ({
  isOpen,
  width,
  title,
  showCloseBtn,
  children,
  onClose,
}) => {
  return (
    <>
      <ModalBackdrop $isOpen={isOpen} onClick={onClose}></ModalBackdrop>
      <ModalCover $width={width}>
        <ModalElement className="Modal" data-testid="test-Modal" $isOpen={isOpen} $width={width}>
          {(title || showCloseBtn) && (
            <ModalHeading>
              <h2>{title}</h2>

              {showCloseBtn && <ModalClose id='modal-close' onClick={onClose} />}
            </ModalHeading>
          )}

          {children}
        </ModalElement>
      </ModalCover>
    </>
  );
};

export default Modal;
