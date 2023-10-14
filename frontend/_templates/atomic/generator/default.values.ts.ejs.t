---
to: "<%= (!isTemplate) ? `${path}/values.ts` : null %>"
---
const language = {
  en: {
    title: '<%= compName %>',
  },
};

export default {
  language
}