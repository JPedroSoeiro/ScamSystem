import api from "./api";

export const postLodges = async (formData) => {
  try {
    const response = await api.post("lodges/create-confirm", formData);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar loja:", error);
    throw error;
  }
};
