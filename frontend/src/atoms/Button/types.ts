export interface IButtonProps {
  /**
   * The button ID will generated if not assigned
   */
  id?: string;

  /**
   * The text to be displayed on the button
   */
  children: React.ReactNode;

  /**
   * set the button to be interactive, or not
   */
  disabled?: boolean;

  /**
   * The type of the button
   */
  type?: TButtonType;

  /**
   * The loading state of the button
   */
  isLoading?: boolean;

  /**
   * the function to be called on click
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface IButtonStyleProps extends IButtonProps {
  /**
   * The loading state of the button
   */
  $isLoading?: boolean;
}

export type TButtonType = 'button' | 'submit' | 'reset';
