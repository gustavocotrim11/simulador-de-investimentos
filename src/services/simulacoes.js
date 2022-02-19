import { api } from "./api";

import { toast } from "react-toastify";

export async function getSimulacao(tipoRendimento, tipoDeIndexação) {
  try {
    const response = await api.get(`/simulacoes/?tipoIndexacao=${tipoDeIndexação}&tipoRendimento=${tipoRendimento}`);

    if (!response.data[0]) throw new Error();
    return response.data[0];
  } catch (err) {
    console.log(err);
    toast.error(`Erro na simulação: ${err.message}`);
  }
}