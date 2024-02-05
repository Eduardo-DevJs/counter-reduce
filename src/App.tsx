import { useReducer } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';

type reducerState = {
  count: number;
};

type reducerAction = {
  type: string;
};

const initialState: reducerState = {count: 0};
function reducer(state: reducerState, action: reducerAction) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1,
      };
      break;
    case 'REMOVE':
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1,
        };
      }
      break;
    case 'RESET':
      return initialState;
      break;
  }

  return state;
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex h-screen items-center justify-center bg-cyan-950">
      <div>
        <div className="w-56 flex items-center justify-center h-56 rounded-full border border-white">
          <h1 className="text-8xl text-white selection:not-sr-only">{state.count}</h1>
        </div>

        <div className="flex items-center justify-around mt-5">
          <FaArrowAltCircleUp
            onClick={() => dispatch({ type: 'ADD' })}
            size={45}
            color="#fff"
            className="cursor-pointer"
          />
          <FaArrowAltCircleDown
            onClick={() => dispatch({ type: 'REMOVE' })}
            size={45}
            color="#fff"
            className="cursor-pointer"
          />
          <GrPowerReset
            onClick={() => dispatch({ type: 'RESET' })}
            size={45}
            color="#fff"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
