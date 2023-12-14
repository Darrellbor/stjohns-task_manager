import React from 'react';
import { IIconProps } from 'types/icon';

interface ICheckboxIconProps extends IIconProps {
  checked: boolean;
}

export const Checkbox: React.FC<ICheckboxIconProps> = ({ id, checked, onClick }) => {
  return (
    <svg id={id} data-testid={id} width="21" height="21" viewBox="0 0 21 21" fill="none" onClick={onClick}>
      <rect x="0.5" y="0.5" width="20" height="20" rx="5.5" fill="#E7E9F0" stroke="#4D5879" />
      {checked && (
        <path
          id='tick-icon'
          data-testid='tick-icon'
          d="M7 10.0469C7.75089 10.1317 8.76403 12.0531 9.125 12.713C9.31791 13.0657 9.70252 13.4698 9.75 13.8556C9.82249 14.4446 10.255 13.0555 10.3611 12.84C11.0922 11.3549 12.8956 7 15 7"
          stroke="#4D5879"
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
};

export default Checkbox;
