import { useRef, useState } from 'react';

import * as Yup from 'yup';

import { Simulator } from "../Simulator";
import { Simulation } from "../Simulation";

import { Container } from './styles';

export function Board() {
  const [ tipoRendimento, setTipoRendimento ] = useState('');
  const [ tipoDeIndexação, setTipoDeIndexação ] = useState('');
  const [ simulate, setSimulate ] = useState(false);
  const formRef = useRef(null);

  async function handleSimulation(data) {
    try {
      const schema = Yup.object().shape({
        tipoRendimento: Yup.string().required('Item obrigatório'),
        aporteInicial: Yup.string().required('Item obrigatório'),
        prazo: Yup.string().required('Item obrigatório'),
        ipcaInput: Yup.string().required('Item obrigatório'),
        tipoDeIndexação: Yup.string().required('Item obrigatório'),
        aporteMensal: Yup.string().required('Item obrigatório'),
        rentabilidade: Yup.string().required('Item obrigatório'),
        cdi: Yup.string().required('Item obrigatório'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })
      setTipoRendimento(data.tipoRendimento);
      setTipoDeIndexação(data.tipoDeIndexação);
      setSimulate(true);
      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <Simulator formRef={formRef} handleSimulation={handleSimulation} setSimulate={setSimulate}/>
      {simulate && <Simulation tipoRendimento={tipoRendimento} tipoDeIndexação={tipoDeIndexação}/>}
    </Container>
  );
}