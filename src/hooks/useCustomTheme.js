import { useContext } from 'react';
import { CustomThemeContext } from '../context/CustomThemeContext';

export function useCustomTheme() {
  const { handleToggleTheme, currentTheme } = useContext(CustomThemeContext);

  return {
    handleToggleTheme,
    currentTheme,
  };
}
