import React, {  } from 'react';
import { Layout } from './components/Layout';
import { CustomThemeContextProvider } from './context/CustomThemeContext';

export function App() {
  return (
    <>
      <CustomThemeContextProvider>
        <Layout />
      </CustomThemeContextProvider>
    </>
  )
}