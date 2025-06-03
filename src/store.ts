// теперь много counters: 00:34:38 - Reducer, Иммутабельность
import { configureStore } from '@reduxjs/toolkit'

type CounterState = {
    counter: number;
}

export type CounterId = string;

type State = {
    // TypeScript: Record<keyType, valType> создает объект, с ключем свойств типа CounterId и значением свойств типа CounterState: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type 
    counters: Record<CounterId, CounterState | undefined>;
}

export type IncrementAction = {
    type: 'increment';
    // чтобы определить какой из множеств имеющихся counter...
    payload: {
        counterId: CounterId;
    }
}

export type DecrementAction = {
    type: 'decrement'
    payload: {
        counterId: CounterId;
    }
}

type Action = IncrementAction | DecrementAction

const initialCounterState: CounterState = { counter: 0 }
const initialState: State = {
    counters: {},
}

const reducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case "increment": {
            const { counterId } = action.payload;
            const currentCounter = state.counters[counterId] ?? initialCounterState;
            return {
                ...state,
                counters: {
                    ...state.counters,
                    [counterId]: {
                        ...currentCounter,
                        counter: currentCounter.counter + 1,
                    }
                }
            };
        }
        case "decrement": {
            const { counterId } = action.payload;
            const currentCounter = state.counters[counterId] ?? initialCounterState;
            return {
                ...state,
                counters: {
                    ...state.counters,
                    [counterId]: {
                        ...currentCounter,
                        counter: currentCounter.counter - 1,
                    }
                }
            };
        }
        default:
            return state;
    }
};

export const store = configureStore({
    reducer: reducer,
})