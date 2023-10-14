---
to: "<%= (!isTemplate) ? `${path}/${compName}.tsx` : null %>"
---
import React from 'react'
import { <%= propsName %> } from './types';
import values from './values';
import styles from './<%= compName %>.styles';

const { DivStyled } = styles;
const { language } = values;

const <%= compName %>: React.FC<<%= propsName %>> = () => {
  return (
    <DivStyled 
        className='<%= compName %>' 
        data-testid='test-<%= compName %>'
    >
        {language.en.title}
    </DivStyled>
  )
}

export default <%= compName %>;