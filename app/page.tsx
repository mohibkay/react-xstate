"use client";

import { useMachine } from "@xstate/react";
import { myMachine } from "@/machine/myFirstMachine";

export default function Home() {
  const [state, send] = useMachine(myMachine);

  return (
    <main>
      <p
        onMouseEnter={() => send({ type: "MOUSEOVER" })}
        onMouseLeave={() => send({ type: "MOUSEOUT" })}
      >
        {JSON.stringify(state.value)}
      </p>
      <button onClick={() => send({ type: "MOUSEOVER" })}>Mouse Over</button>
      <button onClick={() => send({ type: "MOUSEOUT" })}>Mouse Out</button>
    </main>
  );
}
