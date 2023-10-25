import styled, { css, keyframes } from 'styled-components';
import colors from 'styles/colors';
import { ICalendarStyleProps, TChangeMonth } from './types';

const changeAnimationInAndOut = keyframes`
  0% { transform: translateX(0px); opacity: 1; }
  25% { transform: translateX(-900px); opacity: 0.7; }
  50% { transform: translateX(-900px); opacity: 0; }
  75% { transform: translateX(900px); opacity: 0;}
  100% { transform: translateX(0px); opacity: 1;}
`;

const changeAnimation = (direction: TChangeMonth) => {
  return css`
    & .MonthCalendar {
      transition: all 0.5s ease-in-out;
      animation-name: ${changeAnimationInAndOut};
      animation-duration: 200ms;
      animation-direction: ${direction === 'left' ? 'normal' : 'reverse'};
    }
  `;
};

const CalendarStyled = styled.div`
  display: flex;
  max-width: 100%;
  gap: 5px;
  align-items: center;

  & svg {
    cursor: pointer;
  }
`;

const CalendarInner = styled.div<ICalendarStyleProps>`
  position: relative;
  border-radius: 10px;
  padding: 20px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.5s ease-in-out;
  ${({ $changeMonth }) => $changeMonth !== 'in-view' && changeAnimation($changeMonth)}
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
