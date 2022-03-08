import React, { createContext, useState } from "react";

export const CustomThemeContext = createContext();

export function CustomThemeContextProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const theme = localStorage.getItem('blog-theme');

    return theme ?? 'dark'
  });

  function handleToggleTheme() {
    setCurrentTheme(prevState => {
      let newState = '';
      if (prevState === 'dark') {
        newState = 'light';
      } else {
        newState = 'dark';
      }
      localStorage.setItem('blog-theme', newState)
      return newState
    });
    
  }

  return (
    <CustomThemeContext.Provider value={{ handleToggleTheme, currentTheme }}>
      {children}
    </CustomThemeContext.Provider>
  )
}