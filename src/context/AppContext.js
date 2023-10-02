import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.playload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.playload
        ),
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 20000,
  expenses: [
    { id: 12, name: "shopping", cost: 46 },
    { id: 13, name: "holiday", cost: 23 },
    { id: 14, name: "car service", cost: 98 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
