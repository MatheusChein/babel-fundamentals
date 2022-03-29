import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { CustomThemeContextProvider } from './context/CustomThemeContext';

export function App() {
  return (
    <BrowserRouter>
      <CustomThemeContextProvider>
        <Layout />
      </CustomThemeContextProvider>
    </BrowserRouter>
  );
}
