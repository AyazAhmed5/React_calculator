import { ACTIONS } from "./App";
export const DigitButton = ({ digit, dispatch }) => {
  <button
    onClick={() => {
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
    }}
  >
    ${digit}
  </button>;
};
