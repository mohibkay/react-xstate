import { createMachine, assign } from "xstate";

export const todosMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FWwAQFkCGAxgBYCWAdmAHQAyqeE5UWaGsAxBhZeQG6oDWVFplyFSXWvUbN0mBL1QE8AFxKoyAbQAMAXW07EoAA6YSq9YZAAPRAFoATAE5KAdntbHADgAsPgIyO9i5aLi4ANCAAnoj27pSOWvYArI5+Ln4AzJ5+WklJAL75EcLY+MTkVJIMZEwlbGAATg2oDZRGADYqAGYtALaUJaLlEnTVtbKw8mR8SuaauvqWJrBmamSWNggOAGyUSVo5GduentvbHhn2EdEImfaUGb5+nvaZGX7eSWeFRSBk6HBLIMyuIwEtTHMNnZQq53F5fN4AkEtJ5rnZMrtHN4gkk-K8jhkURlCsUJkNQTRRtISuCVpCkNZEN5KMljn4vu4kqEtN4Mkk0Qh7My-Hcsulto4sl9PCSQMCxBUBmSqpBaasLAzNt5Ja5vNi8klPHkJUcBbZta48t4JTzHpKko9ZfLhpUqTUZKwsABRJotVUM5bq9aapneFwsxwuDIZdIO-XJAWZZzHLRabY5PFS7xOskgxWDFUQSgAYQaYBUYCwFAA7mr6aBNklEbr9XkjV8sQKjq4Y1kJb53mnTj98kA */
    id: "Todos Machine",
    initial: "Loading Todos",
    schema: {
      services: {} as {
        loadTodos: {
          data: string[];
        };
      },
    },
    context: {
      todo: [] as string[],
      errorMessage: undefined as string | undefined,
    },
    states: {
      "Loading Todos": {
        invoke: {
          src: "loadTodos",
          onDone: [{ target: "Todos Loaded", actions: "assignTodosToContext" }],
          onError: [
            { target: "Todos Loaded", actions: "assignErrorToContext" },
          ],
        },
      },
      "Todos Loaded": {
        states: {
          "Create new": {},
        },

        initial: "Create new",
      },
      "Loading Todos Errored": {},
    },
  },
  {
    actions: {
      assignTodosToContext: assign((context, event) => {
        return {
          todos: event.data,
        };
      }),
      assignErrorToContext: assign((context, event) => {
        return {
          errorMessage: (event.data as Error).message,
        };
      }),
    },
  }
);
