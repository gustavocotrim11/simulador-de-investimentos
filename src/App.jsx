import { Board } from "./components/Board";
import { Header } from "./components/Header";

import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from "./styles/global";
import 'react-toastify/dist/ReactToastify.min.css';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Board />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}