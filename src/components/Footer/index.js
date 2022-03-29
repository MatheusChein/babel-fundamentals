import React from 'react';
import { useTheme } from 'styled-components';

import { useCustomTheme } from '../../hooks/useCustomTheme';
import { Container } from './styles';

export function Footer() {
  const theme = useTheme();

  const { currentTheme, handleToggleTheme } = useCustomTheme();

  return (
    <>
      <Container>
        <span>Matheus Blog 2022</span>
        <button onClick={handleToggleTheme} type="button">
          {currentTheme === 'light' ? '🌚' : '🌞'}
        </button>
      </Container>

      <div
        style={{
          marginTop: 24,
          padding: 24,
          backgroundColor: theme.footerBackgroundColor,
        }}
      >
        Exemplo do useTheme. Agora estamos no tema {currentTheme}
      </div>
    </>
  );
}
