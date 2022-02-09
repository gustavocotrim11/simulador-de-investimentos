import { Board } from "./components/Board";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Board />
    </>
  );
}