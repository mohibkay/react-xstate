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
      <p>{JSON.stringify(state.value)}</p>
      <button
        onClick={() => send({ type: "Todos loaded", todos: ["Take bins out"] })}
      >
        Todos Success
      </button>
      <button
        onClick={() =>
          send({ type: "Loading todos failed", errorMessage: "Oh no!" })
        }
      >
        Todos Error
      </button>
    </main>
  );
}
