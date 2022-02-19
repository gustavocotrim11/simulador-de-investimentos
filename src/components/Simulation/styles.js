import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .rows {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;

      div {
        flex: 1 0 20%;
        background: var(--background-light);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1rem;
        gap: 2rem;
        box-shadow: 1px 1px 5px 2px #dfd9dc;
        
        input {
          border: 0;
          outline: 0;
          background: transparent;
          text-align: center;

          font-weight: 400;
          font-size: 1rem;
        }
      }
    }
  }
`