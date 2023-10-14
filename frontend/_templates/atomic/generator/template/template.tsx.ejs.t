---
to: "<%= !isTemplate ? null : `${path}/${compName}.tsx` %>"
---
import React from 'react';
import styles from './<%= compName %>.styles';
import { <%= propsName %> } from './types';
import { TMockApi, TUseQueryResult, useMockApi } from 'utils/mock.utils';

const { DivStyled } = styles;

const <%= compName %>: React.FC<{mock?: TMockApi<<%= propsName %>>}> = ({ mock }) => {
  const { isError, isLoading, data, error } = mock
    ? useMockApi(mock)
    : ({} as TUseQueryResult< <%=propsName%>>);

  if (isLoading) return <div data-testid={`test-<%= compName %>-loading`}>Loading...</div>;
  if (isError) return <div data-testid={`test-<%= compName %>-error`}>{JSON.stringify(error)}</div>;
  if (!data) return <div data-testid={`test-<%= compName %>-empty`}>Response empty</div>;

  return (
    <DivStyled 
      className="<%= compName %>"
      data-testid={`test-<%= compName %>-template`}
    >
    </DivStyled>
  )
};

export default <%= compName %>
