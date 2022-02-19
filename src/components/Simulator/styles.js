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

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .formContainer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;

      .formContent {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }
    }

    .formAction {
      width: 100%;
      margin-top: 2rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;

      button[type="button"] {
          width: 200px;
          padding: 0 1.5rem;
          height: 4rem;
          background-color: var(--background);
          color: black;
          border-radius: 0.625rem;
          border: 1px solid black;
          font-size: 1rem;
          font-weight: 700;

          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }

        button[type="submit"] {
          width: 200px;
          padding: 0 1.5rem;
          height: 4rem;
          background-color: var(--coral);
          color: black;
          border-radius: 0.625rem;
          border: 0;
          font-size: 1rem;
          font-weight: 700;
          
          transition: filter 0.2s;
          
          &:disabled {
            background-color: gray;
          }

          &:hover {
            filter: brightness(0.9);
          }
        }
    }
  }
`