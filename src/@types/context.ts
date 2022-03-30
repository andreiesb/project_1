import { CardModel } from "../@models/card";

export enum Types {
  TOGGLE_CARD = "TOGGLE_CARD",
}

export interface InitialStateProps {
  card: CardModel;
}

export interface ActionProps {
  type: Types;
  payload: CardModel;
}

export interface ContextProps {
  card: CardModel;
  toggleCard?: (data: CardModel) => void;
}

export interface ProviderProps {
  value: ContextProps;
  children: React.ReactNode;
}
