import React from 'react'
import styles from './ColorInfo.styles';

const { DivStyled, ColorItem, ColorEl } = styles;

const ColorInfo: React.FC = () => {
  return (
    <DivStyled 
        className='ColorInfo' 
        data-testid='test-ColorInfo'
    >
        <ColorItem>
          <ColorEl $color='today' />
          <h4>{'Today\'s Date'}</h4>
        </ColorItem>

        <ColorItem>
          <ColorEl $color='available' />
          <h4>{'Available Tasks To Be Filled'}</h4>
        </ColorItem>

        <ColorItem>
          <ColorEl $color='filled' />
          <h4>{'All Tasks Filled'}</h4>
        </ColorItem>
    </DivStyled>
  )
}

export default ColorInfo;