import api from "./api";

const criar = (body) => {
  return api.post("/criarUsuario", body);
};

const login = (body) => {
  return api.post("/login", body);
};

const listEmail = () => {
  return api.get("/selectEmail");
};

const apiUser = {
  criar,
  login,
  listEmail,
};

export default apiUser;
