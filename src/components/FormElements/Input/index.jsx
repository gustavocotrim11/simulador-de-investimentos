import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import NumberFormat from "react-number-format";

import { Container } from './styles'

export default function Input({ name, label, prefix, suffix, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      getValue: (ref) => {
        if (!ref.state || !ref.state.value) {
          return undefined;
        }
        let value = ref.state.value;
        if (prefix) {
          value = value.replace(prefix, '');
        }
        if (suffix) {
          value = value.replace(suffix, '');
        }
        if (typeof value === 'string') {
          value = value.replace('.', '').replace(',', '.');
        }
        return value;
      },
      setValue: (ref, value) => {
        if (value) {
          ref.state.value = parseFloat(value);
          ref.state.numAsString = value;
        }
      },
      clearValue: (ref) => {
        ref.state.numAsString = '';
      }
      
    });
  }, [fieldName, registerField]);

  return (
    <Container isThereAnyError={error}>
      <label htmlFor={fieldName}>{label}</label>

      <NumberFormat
        ref={inputRef} 
        isNumericString
        allowNegative={false}
        prefix={prefix}
        suffix={suffix}
        {...rest}
      />

      { error && <span>{error}</span> }
    </Container>
  )
}