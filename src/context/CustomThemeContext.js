import React, { createContext, useState, useMemo } from 'react';

export const CustomThemeContext = createContext();

export function CustomThemeContextProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const theme = localStorage.getItem('blog-theme');

    return theme ?? 'dark';
  });

  function handleToggleTheme() {
    setCurrentTheme(prevState => {
      let newState = '';
      if (prevState === 'dark') {
        newState = 'light';
      } else {
        newState = 'dark';
      }
      localStorage.setItem('blog-theme', newState);
      return newState;
    });
  }

  const contextValue = useMemo(
    () => ({
      handleToggleTheme,
      currentTheme,
    }),
    [currentTheme],
  );

  return (
    <CustomThemeContext.Provider value={contextValue}>
      {children}
    </CustomThemeContext.Provider>
  );
}
