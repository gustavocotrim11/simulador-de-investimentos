import styled from 'styled-components'

export const Container = styled.div`
  label {
    display: block;
    margin: 2rem 0 1rem 0;
    font-weight: 300;
    font-size: 0.9rem;
    color: ${props => props.isThereAnyError ? 'red' : 'black'};
  }

  input {
    width: 100%;
    height: 3rem;

    border: 0;
    outline: 0;
    border-bottom: 1px solid;
    border-color: ${props => props.isThereAnyError ? 'red' : 'black'};
    background: transparent;

    font-weight: 400;
    font-size: 1rem;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    font-weight: 300;
    font-size: 0.9rem;
    color: red;
  }
`