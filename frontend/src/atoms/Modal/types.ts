export interface IModalProps {
  /**
   * The unrequired title of the modal
   */
  title?: string;

  /**
   * The boolean to control the state/visibility of the modal
   */
  isOpen: boolean;

  /**
   * Handles removing the modal from view
   */
  onClose?: (event: React.MouseEvent<HTMLOrSVGElement | HTMLButtonElement>) => void;

  /**
   * If true the default close button would be present on the modal
   */
  showCloseBtn?: boolean;

  /**
   * The width of the modal
   */
  width?: TModalWidth;

  /**
   * The body of the modal
   */
  children: React.ReactNode;
}

export interface IModalBackdropStyleProps {
  /**
   * The boolean to control the state/visibility of the modal
   */
  $isOpen: boolean;
}

export interface IModalStyleProps {
  /**
   * The boolean to control the state/visibility of the modal
   */
  $isOpen: boolean;

  /**
   * The width of the modal
   */
  $width?: TModalWidth;
}

export type TModalWidth = 'Small' | 'Medium' | 'Large';
