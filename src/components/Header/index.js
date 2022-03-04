import React from 'react';
import { useCustomTheme } from '../../hooks/useCustomTheme';
import { Container } from './styles';

export function Header() {
  const { currentTheme, handleToggleTheme } = useCustomTheme();

  return (
    <Container>
      <h1>Blog</h1>
      <button
        onClick={handleToggleTheme}
        type='button'
      >
        {currentTheme === 'light' ? '🌚' : '🌞'}
      </button>
    </Container>
  )
}