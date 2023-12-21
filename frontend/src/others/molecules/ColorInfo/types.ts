export interface IColorElProps {
  /**
   * Pick the color the element should have
   */
  $color: TColors;
}

export type TColors = 'today' | 'available' | 'filled';