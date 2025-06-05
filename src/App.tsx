//! 58:28
import { useEffect, useReducer, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  store,
  type IncrementAction,
  type DecrementAction,
  type CounterId,
  type AppState,
} from "./store";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter counterId="first" />
      <Counter counterId="second" />
      <Counter counterId="anyName" />
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

const selectCounter = (state: AppState, counterId: CounterId) =>
  state.counters[counterId];

export function Counter({ counterId }: { counterId: CounterId }) {
  // это просто хак для force update компонента (тайм код 30:00): https://youtu.be/YROz0WYExww?t=1815
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const lastStateRef = useRef<ReturnType<typeof selectCounter>>(null);
  
  useEffect(() => {
    //  подписка на любые изменения, а именно когда: dispathc({type}) => reducer => subscribe(myFunc())
    const unsubscribe = store.subscribe(() => {
      const currentState = selectCounter(store.getState(), counterId);
      const lastState = lastStateRef.current;

      if (currentState !== lastState) {
        forceUpdate();
      }

      lastStateRef.current = currentState;
    });
    // когда размонтируется компонент - мы отпишемся
    return unsubscribe;
  }, []);

  const counterState = selectCounter(store.getState(), counterId);

  return (
    <>
      counter: {counterState?.counter}
      <button
        onClick={() =>
          store.dispatch({
            type: "increment",
            payload: {
              counterId,
            },
          } satisfies IncrementAction)
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          store.dispatch({
            type: "decrement",
            payload: {
              counterId,
            },
          } satisfies DecrementAction)
        }
      >
        decrement
      </button>
    </>
  );
}

export default App;
