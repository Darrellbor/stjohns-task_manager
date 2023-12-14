export interface ICheckboxProps {
  /**
   * The label of the checkbox (this prompts an action)
   */
  label: string;

  /**
   * Checked is a boolean that states if it has been selected
   */
  checked: boolean;

  /**
   * This sets the checkbox state (disabled or active)
   */
  disabled?: boolean

  /**
   * The function to call back when the checkbox is changed
   */
  onClick?: (e: React.MouseEvent<HTMLOrSVGElement>) => void;
}

export interface ICheckboxStyleProps {
  /**
   * This sets the checkbox state (disabled or active)
   */
  $disabled?: boolean;
}