import { api } from "./api";

import { toast } from "react-toastify";

export async function getIndicador(indicador) {
  try {
    const response = await api.get(`/indicadores/?nome=${indicador}`);

    if (!response.data[0].valor) throw new Error();
    return response.data[0].valor.toString(); 
  } catch (err) {
    console.log(err);
    toast.error(`Erro ao buscar indicador: ${err.message}`);
  }
}