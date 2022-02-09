import { useState } from 'react';

import { FaCheck } from "react-icons/fa";

import { Container, RadioBox } from './styles';

export function Simulator() {
  const [initialContribution, setInitialContribution] = useState();
  const [maturityDate, setMaturityDate] = useState();
  const [ipca, setIpca] = useState();
  const [monthlyContribution, setMonthlyContribution] = useState();
  const [returnRate, setReturnRate] = useState();
  const [cdi, setCdi] = useState();
  const [incomeType, setIncomeType] = useState('');
  const [indexingType, setIndexingType] = useState('');
  
  function handleSimulation(event) {
    event.preventDefault();
    
    console.log({
      initialContribution,
      maturityDate,
      ipca,
      monthlyContribution,
      returnRate,
      cdi,
      incomeType,
      indexingType
    });
  }

  function handleClearFields() {
    setInitialContribution();
    setMaturityDate();
    setIpca();
    setMonthlyContribution();
    setReturnRate();
    setCdi();
    setIncomeType('');
    setIndexingType('');
  }

  return (
    <Container>
      <h2>Simulador</h2>

      <form onSubmit={handleSimulation} onReset={handleClearFields}>
        <div className="formContainer">
          <div className="formContent">
            <label>Rendimento</label>
            <div className="checkboxButton">
              <RadioBox type='button' onClick={() => {setIncomeType('gross')}} isActive={incomeType === 'gross'}>{incomeType === 'gross' && <FaCheck/>} Bruto</RadioBox>
              <RadioBox type='button' onClick={() => {setIncomeType('net')}} isActive={incomeType === 'net'}>{incomeType === 'net' && <FaCheck/>} Líquido</RadioBox>
            </div>

            <label>Aporte Inicial</label>
            <input
              type='number'
              value={initialContribution}
              onChange={event => setInitialContribution(Number(event.target.value))}
            />

            <label>Prazo (em meses)</label>
            <input type="number" value={maturityDate} onChange={event => setMaturityDate(Number(event.target.value))}/>

            <label>IPCA (ao ano)</label>
            <input type="number" value={ipca}/>

          </div>
          <div className="formContent">
            <label>Tipos de Indexação</label>
            <div className="checkboxButton">
              <RadioBox type='button' onClick={() => {setIndexingType('pre')}} isActive={indexingType === 'pre'}>{indexingType === 'pre' && <FaCheck/>} PRÉ</RadioBox>
              <RadioBox type='button' onClick={() => {setIndexingType('post')}} isActive={indexingType === 'post'}>{indexingType === 'post' && <FaCheck/>} POS</RadioBox>
              <RadioBox type='button' onClick={() => {setIndexingType('fixed')}} isActive={indexingType === 'fixed'}>{indexingType === 'fixed' && <FaCheck/>} FIXADO</RadioBox>
            </div>

            <label>Aporte Mensal</label>
            <input type="number" value={monthlyContribution} onChange={event => setMonthlyContribution(Number(event.target.value))}/>

            <label>Rentabilidade</label>
            <input type="number" value={returnRate} onChange={event => setReturnRate(Number(event.target.value))}/>

            <label>CDI (ao ano)</label>
            <input type="number" value={cdi}/>

          </div>
        </div>
        <div className="formAction">
          <button type="reset">Limpar campos</button>
          <button type="submit">Simular</button>
        </div>
      </form>
    </Container>
  );
}