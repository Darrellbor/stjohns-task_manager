import styled, { css } from 'styled-components';
import colors from 'styles/colors';
import { ITaskGroupStyleProps } from './types';

const TaskWrapper = styled.div`
  display: block;
  max-width: 100%;
`;

const TaskTitle = styled.div<ITaskGroupStyleProps>`
  background-color: ${colors.brand};
  padding: 25px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: ${colors.white};
  cursor: pointer;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  ${({ $isOpen }) =>
    !$isOpen &&
    css`
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    `}
`;

const TaskAdd = styled.div`
  color: ${colors.white};
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;
  z-index: 10;

  & svg {
    height: 28px;
    width: 28px;
  }
`;

const TaskDetails = styled.div<ITaskGroupStyleProps>`
  background-color: ${colors.taskGroup.detailsBackground};
  padding: 20px;
  padding-top: 25px;
  transform: scale(0);
  height: 0;
  transition: all 0.2s ease-in-out;
  color: ${colors.brand};
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: scale(1);
      height: 100%;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    `}
`;

const TaskDetailsItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
  margin-top: -25px;
`;

export default {
  TaskWrapper,
  TaskTitle,
  TaskAdd,
  TaskDetails,
  TaskDetailsItem,
};
