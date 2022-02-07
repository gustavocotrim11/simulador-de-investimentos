import { Header } from "./components/Header";
import { Simulation } from "./components/Simulation";
import { Simulator } from "./components/Simulator";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Simulator />
      <Simulation />
    </>
  );
}