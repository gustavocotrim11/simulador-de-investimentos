import { Simulator } from "../Simulator";
import { Simulation } from "../Simulation";

import { Container } from './styles';

export function Board() {
  return (
    <Container>
      <Simulator />
      <Simulation />
    </Container>
  );
}