import { IModalProps } from './types';
import values from './values';

const { language } = values;

const ModalComplete: IModalProps = {
  isOpen: true,
  children: language.en.modalBody,
  title: language.en.modalTitle,
  showCloseBtn: true,
  width: 'Medium'
};

const OpenModal: IModalProps = {
  isOpen: true,
  children: language.en.modalBody,
};

const ModalWithTitle: IModalProps = {
  isOpen: true,
  children: language.en.modalBody,
  title: language.en.modalTitle
};

const ModalWithLargeWidth: IModalProps = {
  isOpen: true,
  children: language.en.modalBody,
  width: 'Large'
};

const ModalWithCloseBtn: IModalProps = {
  isOpen: true,
  children: language.en.modalBody,
  showCloseBtn: true,
};

const ClosedModal: IModalProps = {
  isOpen: false,
  children: language.en.modalBody,
};

export default {
  ModalComplete,
  OpenModal,
  ModalWithTitle,
  ModalWithLargeWidth,
  ModalWithCloseBtn,
  ClosedModal
};
