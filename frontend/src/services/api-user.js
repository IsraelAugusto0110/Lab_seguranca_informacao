import api from "./api";

const criar = (body) => {
  return api.post("/criarUsuario", body);
};

const login = (body) => {
  return api.post("/login", body);
};

const apiUser = {
  criar,
  login,
};

export default apiUser;
