import React, { createContext, FC, useState } from "react";

interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}

const defaultContextValue: AppStateValue = {
  username: "yachen",
  shoppingCart: { items: [] },
};

export const appContext = createContext(defaultContextValue);

export const AppStateProvider: FC = ({ children }) => {
  const [state, setState] = useState(defaultContextValue);

  return <appContext.Provider value={state}>{children}</appContext.Provider>;
};
