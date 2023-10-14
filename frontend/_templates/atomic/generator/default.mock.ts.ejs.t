---
to: "<%= (!isTemplate) ? `${path}/mock.ts` : null %>"
---
import { <%= propsName %> } from './types';

const Success: <%= propsName %> = {
  value: 'Success',
};

export default {
  Success,
};
