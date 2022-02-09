import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);

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

        label {
          font-weight: 300;
          font-size: 0.9rem;
        }

        input {
          padding-top: 1rem;
          width: 100%;
          height: 3rem;
          

          border: 0;
          outline: 0;
          border-bottom: 1px solid black;
          background: transparent;

          font-weight: 400;
          font-size: 1rem;

        }
        
        label + input {
          margin-bottom: 2rem;
        }

        .checkboxButton {
          width: 100%;
          height: 4rem;
          margin: 1rem 0 2rem 0;
          display: flex;
        }
      }
    }

    .formAction {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;

      button[type="reset"] {
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

export const RadioBox = styled.button`
  flex-grow: 1;
  background: ${(props) => props.isActive ? 'var(--coral)' : 'var(--background)'};
  color: ${(props) => props.isActive ? 'var(--white)' : 'black'};
  border: 1px solid black;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:first-child {
    border-radius: 0.625rem 0 0 0.625rem;
    border-right: 0;
  }

  &:last-child {
    border-radius: 0 0.625rem 0.625rem 0;

    &:not(:nth-child(2)) {
      border-left: 0;
    }
  }

  .checked {
    background: var(--coral);
  }
`