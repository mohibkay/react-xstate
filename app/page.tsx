'use client';

import { useMachine } from '@xstate/react';
import { todosMachine } from '@/machine/todoAppMachine';
import { myMachine } from '@/machine/myFirstMachine';

export default function Home() {
	// const [state, send] = useMachine(todosMachine, {
	//   services: {
	//     loadTodos: async () => {
	//       return ["Take bin out", "do laundary"];
	//     },
	//   },
	// });

	const [state, send] = useMachine(todosMachine, {
		services: {
			loadTodos: async () => {
				throw new Error('Failed to load todos');
				return ['Take bin out', 'do laundary'];
			},
		},
	});

	return (
		<main>
			<pre>{JSON.stringify(state.value)}</pre>
			{/* <pre>{JSON.stringify(state.value)}</pre> */}
			<button
				onClick={() => {
					send({
						type: 'Todos loaded',
						todos: ['Take bin out', 'do laundary'],
					});
				}}
			>
				Todos loaded
			</button>
			<button
				onClick={() => {
					send({
						type: 'Loading todos failed',
						errorMessage: 'Failed to load todos',
					});
				}}
			>
				Loading todos failed
			</button>
		</main>
	);
}
