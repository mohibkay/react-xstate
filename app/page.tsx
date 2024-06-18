"use client";

import { useMachine } from "@xstate/react";
import { todosMachine } from "@/machine/todoAppMachine";

export default function Home() {
  const [state, send] = useMachine(todosMachine);

  return (
    <main>
      <p>{JSON.stringify(state.value)}</p>
      <button onClick={() => send({ type: "Todos loaded" })}>
        Todos Success
      </button>
      <button onClick={() => send({ type: "Loading todos failed" })}>
        Todos Error
      </button>
    </main>
  );
}
