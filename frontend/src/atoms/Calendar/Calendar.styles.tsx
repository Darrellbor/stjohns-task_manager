import styled from 'styled-components';
import colors from 'styles/colors';

const CalendarStyled = styled.div`
  display: flex;
  max-width: 100%;
  gap: 5px;
  align-items: center;

  & svg {
    cursor: pointer;
  }
`;

const CalendarInner = styled.div`
  border-radius: 10px;
  padding: 20px;
  background-color: ${colors.white};
  display: flex;
  gap: 5px;
`;

const MidPoint = styled.div`
  & hr {
    border-top: 2px solid ${colors.yearBorder};
  }
`;

export default {
  CalendarStyled,
  CalendarInner,
  MidPoint,
};
