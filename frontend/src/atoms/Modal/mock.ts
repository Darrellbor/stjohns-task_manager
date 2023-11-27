import { IModalProps } from './types';

const ModalComplete: IModalProps = {
  isOpen: true,
  children: `hello`,
  title: 'Volunteer to support',
  showCloseBtn: true,
  width: 'Medium'
};

const OpenModal: IModalProps = {
  isOpen: true,
  children: `hello`,
};

const ModalWithTitle: IModalProps = {
  isOpen: true,
  children: `hello`,
  title: 'Modal Title'
};

const ModalWithLargeWidth: IModalProps = {
  isOpen: true,
  children: `hello`,
  width: 'Large'
};

const ModalWithCloseBtn: IModalProps = {
  isOpen: true,
  children: `hello`,
  showCloseBtn: true,
};

const ClosedModal: IModalProps = {
  isOpen: false,
  children: `hello`,
};

export default {
  ModalComplete,
  OpenModal,
  ModalWithTitle,
  ModalWithLargeWidth,
  ModalWithCloseBtn,
  ClosedModal
};
