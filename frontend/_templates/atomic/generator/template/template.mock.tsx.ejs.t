---
to: "<%= !isTemplate ? null : `${path}/mock.ts` %>"
---
import { SerializedError } from "@reduxjs/toolkit";
import { <%= propsName %> } from "./types"

const success: <%= propsName %> = {
    id: 1,
}

const error: SerializedError = {
  code: '401',
  message: 'Not the server owner',
};

export default {
    success,
    error,
}