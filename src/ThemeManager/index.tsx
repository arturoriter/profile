import React from 'react';

import { DarkTheme } from '../data/DarkTheme';
import { LightTheme } from '../data/LightTheme';
import { ThemeContext } from '../types/ThemeContext';

const defaultMode = LightTheme;

export const ManageThemeContext: React.Context<ThemeContext> = React.createContext(
  {
    mode: defaultMode,
    toggle: () => {},
  }
);

export const useTheme = () => React.useContext(ManageThemeContext);

export const ThemeManager: React.FC = ({ children }) => {
  const [themeState, setThemeState] = React.useState({
    mode: defaultMode,
  });

  const toggle = () => {
    setThemeState({
      mode: themeState.mode === LightTheme ? DarkTheme : LightTheme,
    });
  };

  return (
    <ManageThemeContext.Provider
      value={{
        mode: themeState.mode,
        toggle: toggle,
      }}
    >
      {children}
    </ManageThemeContext.Provider>
  );
};
