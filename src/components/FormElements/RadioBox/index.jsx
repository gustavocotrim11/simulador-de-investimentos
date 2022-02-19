import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { Container } from './styled'

export default function RadioBox({ name, label, options, ...rest }) {
  const inputRefs = useRef([])
  const { fieldName, registerField, defaultValue = '', error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs,
      getValue: refs => {
        return refs.current.find(input => input?.checked)?.value
      },
      setValue: (refs, id) => {
        const inputRef = refs.current.find(ref => ref.id === id)
        if (inputRef) inputRef.checked = true
      },
      clearValue: refs => {
        const inputRef = refs.current.find(ref => ref.checked === true)
        if (inputRef) inputRef.checked = false
      },
    })
  }, [fieldName, registerField])

  return (
    <Container isThereAnyError={error}>
      <label htmlFor={fieldName}>{label}</label>

      <div className="radioBoxContainer">
      {options.map((option, index) => (
        <div className="radioBox" key={option.id} >
          <input
            type="radio"
            ref={ref => {
              inputRefs.current[index] = ref
            }}
            id={option.id}
            name={name}
            defaultChecked={defaultValue.includes(option.id)}
            value={option.value}
            {...rest}
          />

          <label htmlFor={option.id} key={option.id}>
            {option.label}
          </label>
        </div>
      ))}
      </div>

      {error && <span>{error}</span>}
    </Container>
  )
}