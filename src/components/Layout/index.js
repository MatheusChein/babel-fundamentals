import React, { useMemo } from 'react';
import { ThemeProvider } from 'styled-components'

import { Header } from '../Header';
import { PostsList } from '../PostsList';
import { Footer } from '../Footer';
import { useCustomTheme } from '../../hooks/useCustomTheme';
import themes from "../../styles/themes"


import GlobalStyle from '../../styles/global';

export function Layout() {
  const { currentTheme } = useCustomTheme();

  const theme = useMemo(() => {
    return themes[currentTheme] || themes.dark
  }, [currentTheme]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <PostsList />
        <Footer />
      </ThemeProvider>
    </>
  )
}