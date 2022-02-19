import styled from 'styled-components';

export const Container = styled.main`
  background: var(--background);

  margin: 0 2rem;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`