import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ stacked }) =>
    stacked ? 'min-content' : 'min-content 1fr'};
  grid-template-rows: ${({ stacked }) => (stacked ? 'min-content 1fr' : '1fr')};
  grid-gap: 1rem;
  background: none;
  border: none;
  font-family: inherit;
  color: inherit
  align-items: center;
  text-decoration: none;
  cursor: ${({ to, onClick }) => (to || onClick ? 'pointer' : undefined)}
  transition: all 0.25 ease;
  :hover {
    transform: ${({ to, onClick }) => (to || onClick ? 'scale(1.05)' : 'none')};
    i {
      background: ${({ to, onClick }) =>
        to || onClick ? 'rgba(255, 255, 255, 0.2)' : undefined};
    }
  }
  > i {
    margin: auto;
  }
`;