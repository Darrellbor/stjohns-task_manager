import styled, { css } from 'styled-components';
import colors from 'styles/colors';
import { IDayCalendarStyleProps } from './types';

// type TDivStyles = Pick<IDayCalendarProps, 'date' | 'isActive' | 'isToday' | 'tasksFilled'>;

const setBackgroundColor = (color: string) => {
  return css`
    background-color: ${color};
    color: ${colors.white};
    cursor: pointer;
  `;
};
const DivStyled = styled.div<IDayCalendarStyleProps>`
  display: block;
  width: 100%;
  padding: 11.5px 15px;
  border-radius: 100%;
  max-width: fit-content;
  ${({ $isActive, $isToday }) => $isActive && $isToday && setBackgroundColor(colors.calendar.today)}
  ${({ $isActive, $tasksFilled }) =>
    $isActive && $tasksFilled && setBackgroundColor(colors.calendar.filled)}
  ${({ $isActive, $isToday, $tasksFilled }) =>
    $isActive && !$isToday && !$tasksFilled && setBackgroundColor(colors.calendar.available)}
  ${({ $isActive, $isToday, $tasksFilled }) =>
    $isActive && $isToday && $tasksFilled && setBackgroundColor(colors.calendar.filled)}
`;

export default {
  DivStyled,
};
