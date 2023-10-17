---
to: "<%= !isTemplate ? null : `${path}/types.ts` %>"
---

export interface <%= propsName %> {
  /**
   * Put description for prop here
   */
  id: number;
}

export interface <%= stylePropName %> {
  /**
   * Put description for style prop here
   */
  $id: string;
}