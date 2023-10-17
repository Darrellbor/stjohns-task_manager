---
to: "<%= (!isTemplate) ? `${path}/${compName}.tsx` : null %>"
---
import React from 'react'
import { <%= propsName %> } from './types';
import values from './values';
import styles from './<%= compName %>.styles';

const { DivStyled } = styles;
const { language } = values;

const <%= compName %>: React.FC<<%= propsName %>> = ({ value }) => {
  return (
    <DivStyled 
        className='<%= compName %>' 
        $value={value}
        data-testid='test-<%= compName %>'
    >
        {language.en.title}
    </DivStyled>
  )
}

export default <%= compName %>;