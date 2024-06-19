"use client";

import { useMachine } from "@xstate/react";
import { todosMachine } from "@/machine/todoAppMachine";

export default function Home() {
  const [state, send] = useMachine(todosMachine, {
    services: {
      loadTodos: async () => {
        return ["Take bin out", "do laundary"];
      },
    },
  });

  return (
    <main>
      <pre>{JSON.stringify(state.value)}</pre>
      <pre>{JSON.stringify(state.context)}</pre>
    </main>
  );
}
