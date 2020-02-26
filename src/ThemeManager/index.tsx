import React from 'react';
import { ThemeContext } from '../types/ThemeContext';
import { darkTheme } from '../data/darkTheme';
import { lightTheme } from '../data/lightTheme';

const defaultMode = lightTheme;

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
      mode: themeState.mode === lightTheme ? darkTheme : lightTheme,
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
