import { createMachine } from "xstate";

export const myMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnwHsAXACXIDcwAnSAYgFkB5AVQGUBRDgDU+AJQDaABgC6iUAAdysXJVzl8skAA9EARgAcAThIA2AEwBmY3oCsOqzvN6dAdgA0IAJ67npkhOsSOtbOACzGIRHmpgC+0e5oWHiEpNj0TKycvAJcACqSMkggCkoqahraCDoGISTWemGmpnUGpnpm5u5eCBZ+wQbmPuYSpv3WBs6xcSAUEHAaCTgExBrFyqrqhRUAtMadiDs1puHjZlaNEj6x8RiLyWRUtAzMECuKa2WbiCGmewh6zn4fAEosMwiEJAYriAFkliCRUk9IK8SutyohzBESCF+tjHM4xs5nAZfoZaj4QoY9ENnMYBjpJtEgA */
  initial: "notHovered",
  states: {
    notHovered: {
      on: {
        MOUSEOVER: {
          target: "hovered",
        },
      },
    },
    hovered: {
      on: {
        MOUSEOUT: {
          target: "notHovered",
        },
      },
    },
  },
});
