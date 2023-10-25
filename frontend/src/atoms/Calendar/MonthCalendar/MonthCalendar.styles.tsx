import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';

const MonthBlock = styled.div`
  display: block;
  width: 100%;
  min-height: 570px;
`;

const MonthTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

const MonthRow = styled.div<{ $first?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  gap: 5px;
  ${({ $first }) => $first && `gap: 14px;`}

  @media(max-width: ${breakpoints.lg}) {
    gap: 2.5px;
    ${({ $first }) => $first && `gap: 11px;`}
  }

  @media (min-width: ${breakpoints.xxl}) {
    gap: 25px;
    ${({ $first }) => $first && `gap: 35px;`}
  }
`;

const MonthItem = styled.h4`
  font-weight: 550;
  margin-right: 7px;
`;

export default {
  MonthBlock,
  MonthTitle,
  MonthRow,
  MonthItem,
};
