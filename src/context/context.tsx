import React, { ReactNode } from "react";

import { CardModel } from "../@models/card";
import {
  Types,
  InitialStateProps,
  ActionProps,
  ContextProps,
  ProviderProps,
} from "../@types/context";

const INITIAL_STATE = {
  card: null,
};

const Context = React.createContext<ContextProps>({
  card: { id: "", title: "", image: "", paragraph: "", link: "" },
  toggleCard: () => {},
});

const reducer = (state: InitialStateProps, action: ActionProps) => {
  const { type, payload } = action;

  switch (type) {
    case Types.TOGGLE_CARD:
      console.log("payload:", payload);
      
      return {
        ...state,
        value: payload,
      };
    default:
      return state;
  }
};

const Provider: React.FC<ProviderProps> = (props) => {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const toggleCard = (data: CardModel) => {
    dispatch({
      type: Types.TOGGLE_CARD,
      payload: data,
    });
  };

  return (
    <Context.Provider
      value={{ card: state.card, toggleCard: toggleCard }}
      {...props}
    />
  );
};

export { Context, Provider };
