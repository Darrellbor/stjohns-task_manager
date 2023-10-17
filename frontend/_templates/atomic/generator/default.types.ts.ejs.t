---
to: "<%= (!isTemplate) ? `${path}/types.ts` : null %>"
---
export interface <%= propsName %> {
  /**
   * Put description for prop here
   */
  value: string;
}

export interface <%= stylePropName %> {
  /**
   * Put description for style prop here
   */
  $value: string;
}