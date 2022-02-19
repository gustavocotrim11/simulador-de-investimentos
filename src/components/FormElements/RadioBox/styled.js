import styled from 'styled-components';

import { FaCheck } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;

  label {
    display: block;
    margin-bottom: 1rem;
    font-weight: 300;
    font-size: 0.9rem;
    color: ${props => props.isThereAnyError ? 'red' : 'black'};
  }

  .radioBoxContainer {
    width: 100%;
    display: flex;

    .radioBox {
      width: 100%;
      display: flex;

      input[type=radio] {
        display: none;
      }

      label {
        margin: 0;
        flex-grow: 1;
        border: 1px solid black;
        padding: 1rem  0;
        font-size: 1rem;
        text-align: center;
        cursor: pointer;
      }

      &:first-child {
        label {
          border-radius: 0.625rem 0 0 0.625rem;
          border-right: 0;
        }
      }

      &:last-child {
        label {
          border-radius: 0 0.625rem 0.625rem 0;

        }
        &:not(:nth-child(2)) {
          label {
            border-left: 0;
          }
        }
      }

      input:checked + label {
        background: var(--coral);
        color: var(--white)
      }
    }
  }

  span {
    display: block;
    margin-top: 0.5rem;
    font-weight: 300;
    font-size: 0.9rem;
    color: red;
  }
`