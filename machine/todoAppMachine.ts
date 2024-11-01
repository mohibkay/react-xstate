import { createMachine } from 'xstate';

export const todosMachine = createMachine(
	{
		/** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAICyBDAxgBYCWAdmAHQAyquEZUmaGsAxM6rJgDa0SQBtAAwBdRKAAOnYgBdiqUuJAAPRAFoAjEIBMFAOwAWAxo0BWM0KEA2ABwHTAGhABPdbb0UjGgMx7T2gE4rbVNvGwBfcKcOHAIScmo+BiZ0TlYaOmSZVK4AM1xibkFRJSlYWXlFJBV1byEbClsbE20NbXqNPT0nVwQ1UICKALtvbSsA71NrY0iokFJ0OCUYvCIyMFLpOQUlVT6DG28KbRsgmx1fCftvHvUug2Pg4b0AgKEzq0jo1Ni1hIz6KRGBx4NUyhUdtU9moThpHoEXud-FZJrc+u59HpvAZrKYcQE9CiviAVnF1hQQZgAZBNuVtlVQNCtEdfKZgnUfGyrEJui51MZdAZ2v48UikcTSX9KACsjlMGAAE4K1AKmlgraVXb8ybHU62C4vbGhNFqAWeYUhA5CUzi2ZAA */
		id: 'Todo Machine',
		schema: {
			events: {} as
				| { type: 'Todos loaded'; todos: string[] }
				| { type: 'Loading todos failed'; errorMessage: string },
		},
		tsTypes: {} as import('./todoAppMachine.typegen').Typegen0,
		states: {
			'Loading Todos': {
				on: {
					'Todos loaded': {
						target: 'Todos Loaded',
						actions: 'consoleLogTodos',
					},
					'Loading todos failed': {
						target: 'Loading todos errored',
					},
				},
			},

			'Todos Loaded': {},
			'Loading todos errored': {},
		},

		initial: 'Loading Todos',
	},
	{
		actions: {
			consoleLogTodos: (context, event) => {
				alert(JSON.stringify(event.todos));
			},
		},
	},
);
