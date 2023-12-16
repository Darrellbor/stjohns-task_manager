import React from 'react';
import { IIconProps } from 'types/icon';

const TaskGroupLine: React.FC<IIconProps> = ({ id, onClick }) => {
  return (
    <svg
      id={id}
      data-testid={id}
      width="12"
      height="51"
      viewBox="0 0 12 51"
      fill="none"
      onClick={onClick}>
      <circle cx="6" cy="45" r="6" fill="#4D5879" />
      <line x1="6.5" y1="-2.18557e-08" x2="6.5" y2="42" stroke="#4D5879" />
    </svg>
  );
};

export default TaskGroupLine;
