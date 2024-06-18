import { createMachine } from "xstate";

export const todosMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FWwAQFkCGAxgBYCWAdmAHQAyqeE5UWaGsAxBhZeQG6oDWVFplyFSXWvUbN0mBL1QE8AFxKoyAbQAMAXW07EoAA6YSq9YZAAPRACYAzAHZKAVgBsAFltutLgJx+AIyOji4eADQgAJ6IABy2lB4u9oF+PrF+jlqBbm4AvnmRwtj4xORUkgxkTMVsYABO9aj1lEYANioAZs0AtpTFomUSdFU1srDyZHxK5pq6+pYmsGZqZJY2CA7O7l4+-kEhYZExCIH2folJsbHnsYEuLrH5BZFk6HCWA6XiYIums+tEABaNzHYFuShaKHZdwuWxaO7ZWIvEBfMTlGgjaTFP7LAFIayILxg05aBKBDweRxPbI5PyPFFooZCcZYSqQXErCwEjaU5y2TL2Jz3exeOEuEl3SiBWKObxuWJU66Kxms74YyrY1kAUUazQ5BKWXLWPKJVMoAscQscIrFtgl0UQZwuCqhbkC2QcsTCBQKQA */
  id: "Todos Machine",
  initial: "Loading Todos",
  schema: {
    services: {} as {
      loadTodos: {
        data: string[];
      };
    },
  },
  states: {
    "Loading Todos": {
      invoke: {
        src: "loadTodos",
        onDone: [{ target: "Todos Loaded" }],
        onError: [{ target: "Todos Loaded" }],
      },
    },
    "Todos Loaded": {},
    "Loading Todos Errored": {},
  },
});
