import { useEffect, useState } from 'react';

import { Form } from "@unform/web";

import Input from '../FormElements/Input/index.jsx';
import RadioBox from '../FormElements/RadioBox';

import { Container } from './styles';

import { getIndicador } from '../../services/indicadores';

export function Simulator({handleSimulation, formRef, setSimulate}) {
  const [ ipca, setIpca] = useState('');
  const [ cdi, setCdi] = useState('');

  function handleClearFields() {
    formRef.current.setErrors({});
    formRef.current.clearField('tipoRendimento');
    formRef.current.clearField('aporteInicial');
    formRef.current.clearField('prazo');
    formRef.current.clearField('tipoDeIndexação');
    formRef.current.clearField('aporteMensal');
    formRef.current.clearField('rentabilidade');
    setSimulate(false);
  }

  useEffect(() => {
    async function fetchIndicadors() {
      setIpca(await getIndicador('ipca'));
      setCdi(await getIndicador('cdi'));
    }

    fetchIndicadors();
  }, [])

  const incomeTypeOptions = [
    { id: 'bruto', value: 'bruto', label: 'Bruto' },
    { id: 'liquido', value: 'liquido', label: 'Líquido' },
  ]

  const indexingTypeOptions = [
    { id: 'pre', value: 'pre', label: 'PRÉ' },
    { id: 'pos', value: 'pos', label: 'PÓS' },
    { id: 'ipca', value: 'ipca', label: 'FIXADO' }, // Obs: Em "tipoIndexacao" a API retorna "ipca" em vez de "fixado" por exemplo
  ]

  return (
    <Container>
      <h2>Simulador</h2>

      <Form ref={formRef} onSubmit={handleSimulation}>
        <div className="formContainer">
          <div className="formContent">
            <RadioBox 
              name="tipoRendimento" 
              label="Rendimento" 
              options={incomeTypeOptions}
            />

            <Input 
              label="Aporte Inicial"
              type='text'
              className="input"
              name="aporteInicial"
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
            />

            <Input 
              label="Prazo (em meses)"
              type="text" 
              className="input" 
              name="prazo"
              format="###" 
            />

            <Input
              value={ipca} 
              label="IPCA (ao ano)" 
              type="text" 
              className="input" 
              readOnly 
              name="ipcaInput"
              thousandSeparator="."
              decimalSeparator=","
              suffix="%"
              decimalScale={2}
            />

          </div>
          <div className="formContent">
            <RadioBox 
              label="Tipos de Indexação" 
              name="tipoDeIndexação" 
              options={indexingTypeOptions}
            />

            <Input 
              label="Aporte Mensal"
              type="text" 
              className="input" 
              name="aporteMensal"
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
            />

            <Input 
              label="Rentabilidade"
              type="text" 
              className="input" 
              name="rentabilidade"
              thousandSeparator="."
              decimalSeparator=","
              suffix="%"
              decimalScale={2}
            />

            <Input 
              value={cdi}
              label="CDI (ao ano)" 
              type="text" 
              className="input" 
              readOnly 
              name="cdi"
              thousandSeparator="."
              decimalSeparator=","
              suffix="%"
              decimalScale={2}
            />
          </div>
        </div>
        <div className="formAction">
          <button type="button" onClick={handleClearFields}>Limpar campos</button>
          <button type="submit">Simular</button>
        </div>
      </Form>
    </Container>
  );
}