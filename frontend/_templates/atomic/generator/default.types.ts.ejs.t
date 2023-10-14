---
to: "<%= (!isTemplate) ? `${path}/types.ts` : null %>"
---
export interface <%= propsName %> {
  /**
   * Put description for prop here
   */
  value: string;
}