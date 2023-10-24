import styled, { css } from 'styled-components';
import colors from 'styles/colors';
import { IDayCalendarStyleProps } from './types';

type TZeroStyles = Pick<IDayCalendarStyleProps, '$isActive' | '$isToday'>;

const setBackgroundColor = (color: string) => {
  return css`
    background-color: ${color};
    color: ${colors.white};
    cursor: pointer;
  `;
};

const isToday = () => {
  return css`
    background-color: ${colors.calendar.today};
    color: ${colors.white};
  `;
};

const setNotInMonth = () => {
  return css`
    color: ${colors.calendar.faded}!important;
    background-color: ${colors.transparent};
    cursor: not-allowed;
  `;
};

const DivStyled = styled.div<IDayCalendarStyleProps>`
  max-width: 100%;
  padding: 15px;
  border-radius: 100%;
  font-weight: 500;
  max-width: fit-content;
  background-color: ${colors.transparent};
  ${({ $isToday }) => $isToday && isToday()}
  ${({ $isActive, $tasksFilled }) =>
    $isActive && $tasksFilled && setBackgroundColor(colors.calendar.filled)}
${({ $isActive, $isToday, $tasksFilled }) =>
    $isActive && !$isToday && !$tasksFilled && setBackgroundColor(colors.calendar.available)}
${({ $isActive, $isToday, $tasksFilled }) =>
    $isActive && $isToday && $tasksFilled && setBackgroundColor(colors.calendar.filled)}
${({ $notInMonth }) => $notInMonth && setNotInMonth()}
${({ $isSmallNumber }) => $isSmallNumber && `padding: 10px 15px;`}
`;

const ZeroStyled = styled.div<TZeroStyles>`
  display: inline;
  ${({ $isActive, $isToday }) =>
    $isActive || $isToday ? `display: none;` : ` visibility: hidden;`}
`;

export default {
  DivStyled,
  ZeroStyled,
};
