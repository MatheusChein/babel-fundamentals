import React, { useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from '../Header';
import { RoutesComponent } from '../../routes';
import { Footer } from '../Footer';
import { useCustomTheme } from '../../hooks/useCustomTheme';
import themes from '../../styles/themes';

import GlobalStyle from '../../styles/global';
import { NavContainer, StyledLink } from './styles';

export function Layout() {
  const { currentTheme } = useCustomTheme();

  const theme = useMemo(
    () => themes[currentTheme] || themes.dark,
    [currentTheme],
  );

  useEffect(() => {
    function handleScroll() {
      console.log('scrollou');
    }
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <NavContainer style={{ position: 'relative' }}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/posts">Posts</StyledLink>
      </NavContainer>
      <RoutesComponent />
      <Footer />
    </ThemeProvider>
  );
}
