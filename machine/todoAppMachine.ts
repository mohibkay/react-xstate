import { createMachine } from 'xstate';

export const todosMachine = createMachine(
	{
		/** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAICyBDAxgBYCWAdmAHQAyquEZUmaGsAxBuRWQG6oDWlZljxEylGnQZN0qWAh6p8uAC7FUpANoAGALradiUAAdZxVesMgAHogBMAZgDsFAKyPbATgCMXxwBZbLQA2L3sggBoQAE9EAA4vCntbW1j7Dy0XDyCte1CAXzzIoRwCEk4JelJGITYwACc61DqKIwAbFQAzJoBbCmKRMvFaSuqZOQUlc01dfUsTWDM1UksbBB97Ck97eJd4vxcHWz9ImIRkvwpY1O9snK0snILCkFJ0OEt+0rE50ymVxAAtBFooCghQtBCtLFkkFvC4XKEggUijISqJysMpDUfgs-khrIgAidEB4NgiPB5bJldl4-AFYsiQJ90YIxpgKpAcYsLPjVnTnF4grZHE4obYggFgacvFpbBRHLTHAraRTxY4PIzmYNqJiqphlGz6o06pz8fNucteYS-AKhSLHGKJeLiWsRfKndk-L5BfYXE88kA */
		id: 'Todo Machine',
		schema: {
			// events: {} as
			// | { type: 'Todos loaded'; todos: string[] }
			// | { type: 'Loading todos failed'; errorMessage: string },
			services: {} as {
				loadTodos: {
					data: string[];
				};
			},
		},
		tsTypes: {} as import('./todoAppMachine.typegen').Typegen0,
		states: {
			'Loading Todos': {
				invoke: {
					src: 'loadTodos',
					onDone: [
						{
							target: 'Todos Loaded',
						},
					],
					onError: [
						{
							target: 'Loading todos errored',
						},
					],
				},
			},
			'Todos Loaded': {},
			'Loading todos errored': {},
		},

		initial: 'Loading Todos',
	},
	{},
);
