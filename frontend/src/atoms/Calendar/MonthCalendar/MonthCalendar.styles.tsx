import styled from 'styled-components';

const MonthBlock = styled.div`
  display: block;
  width: 100%;
`;

const MonthTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

const MonthRow = styled.div<{ $first?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin: 20px;
  ${({ $first }) => $first && `gap: 35px;`}
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
