---
to: "<%= !isTemplate ? null : `${path}/types.ts` %>"
---

export interface <%= propsName %> {
  /**
   * Put description for prop here
   */
  id: number;
}