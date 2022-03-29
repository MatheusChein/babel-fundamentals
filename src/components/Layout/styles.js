import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  margin-left: 24px;
  margin-top: 16px;
  display: flex;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.textColor};
`;
