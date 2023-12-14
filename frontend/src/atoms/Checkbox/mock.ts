import { ICheckboxProps } from './types';

const Unchecked: ICheckboxProps = {
  label: 'Enable Something Awesome',
  checked: false
};

const Checked: ICheckboxProps = {
  label: 'Disable Something Awesome',
  checked: true
};

export default {
  Unchecked,
  Checked
};
