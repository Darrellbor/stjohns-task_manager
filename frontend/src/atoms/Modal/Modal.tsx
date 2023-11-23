import React from 'react'
import { IModalProps } from './types';
import values from './values';
import styles from './Modal.styles';

const { DivStyled } = styles;
const { language } = values;

const Modal: React.FC<IModalProps> = ({ value }) => {
  return (
    <DivStyled 
        className='Modal' 
        $value={value}
        data-testid='test-Modal'
    >
        {language.en.title}
    </DivStyled>
  )
}

export default Modal;