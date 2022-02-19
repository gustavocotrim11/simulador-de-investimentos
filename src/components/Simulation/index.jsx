import { useState, useEffect } from 'react';

import NumberFormat from "react-number-format";

import { Container } from './styles';

import { getSimulacao } from '../../services/simulacoes';

export function Simulation({ tipoRendimento, tipoDeIndexação }) {
  const [ valorFinalBruto, setValorFinalBruto] = useState(0);
  const [ aliquotaIR, setAliquotaIR] = useState(0);
  const [ valorPagoIR, setValorPagoIR] = useState(0);
  const [ valorFinalLiquido, setValorFinalLiquido] = useState(0);
  const [ valorTotalInvestido, setValorTotalInvestido] = useState(0);
  const [ ganhoLiquido, setGanhoLiquido] = useState(0);

  useEffect(() => {
    async function fetchSimulacao() {
      const simulation = await getSimulacao(tipoRendimento, tipoDeIndexação);
  
      setValorFinalBruto(simulation.valorFinalBruto);
      setAliquotaIR(simulation.aliquotaIR);
      setValorPagoIR(simulation.valorPagoIR);
      setValorTotalInvestido(simulation.valorTotalInvestido);
      setValorFinalLiquido(simulation.valorFinalLiquido);
      setGanhoLiquido(simulation.ganhoLiquido);
    }

    fetchSimulacao();
  }, [tipoRendimento, tipoDeIndexação])

  return (
    <Container>
      <h2>Resultado da Simulação</h2>

      
      <div className="rows">
        <div className="row">
          <div>
            <h3>Valor final Bruto</h3>
            <NumberFormat 
              value={valorFinalBruto}
              readOnly
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
            />
          </div>
          <div>
            <h3>Alíquota do IR</h3>
            <NumberFormat 
              value={aliquotaIR}
              thousandSeparator="."
              decimalSeparator=","
              suffix="%"
              decimalScale={2}
            />
          </div>
          <div>
            <h3>Valor Pago em IR</h3>
            <NumberFormat 
              value={valorPagoIR}
              readOnly
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <h3>Valor Final Líquido</h3>
            <NumberFormat 
              style={{color: `${Math.sign(valorFinalLiquido) === 1 && 'green'}`}}
              value={valorFinalLiquido}
              readOnly
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
            />
          </div>  
          <div>
            <h3>Valor Total Investido</h3>
            <NumberFormat 
              value={valorTotalInvestido}
              readOnly
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
            />
          </div>
          <div>
            <h3>Ganho Líquido</h3>
            <NumberFormat
              style={{color: `${Math.sign(valorFinalLiquido) === 1 && 'green'}`}} 
              value={ganhoLiquido}
              readOnly
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
            />
          </div>
        </div>
      </div>
      
    </Container>
  );
}