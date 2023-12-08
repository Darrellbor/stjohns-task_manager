export interface IInputProps {
  /**
   * The input ID will generated if not assigned
   */
  id?: string;

  /**
   * The label of the input
   */
  label?: string;

  /**
   * The input placeholder.
   */
  placeholder?: string;

  /**
   * The type of the input. This can be text, email or number. By default, this is text.
   */
  type?: TInputType;

  /**
   * Set if input is required or not
   */
  required?: boolean;

  /**
   * The value of the input.
   */
  value?: string;

  /**
   * Any additional style for the input.
   */
  style?: React.CSSProperties;

  /**
   * set the input to be interactive or not
   */
  disabled?: boolean;

  /**
   * The function to call back when the input is lost focus
   */
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * The function to call back when the input is changed
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IInputStyleProps {
  /**
   * Put description for style prop here
   */
  $value?: string;
}

export type TInputType = 'text' | 'email' | 'number' | 'tel' | 'password' | 'date';
