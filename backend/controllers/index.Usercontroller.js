const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "users_db",
  password: "123",
  port: 5432,
});

const getUsers = async (req, res) => {
  const sql = "SELECT * FROM usuario";
  const response = await pool.query(sql);
  console.log(response.rows);
  res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM usuario WHERE "id" = $1';
  const response = await pool.query(sql, [id]);
  res.json(response.rows);
};

const createUser = async (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;
  const aceitaemail = req.body.aceitaemail;
  const sql =
    'INSERT INTO usuario("nome", \
        "email", \
        "senha", "aceitaemail") \
        values($1, $2, $3, $4)';
  const response = await pool.query(sql, [nome, email, senha, aceitaemail]);
  res.json({
    message: "ok",
    body: {
      usuario: {
        nome,
        email,
        senha,
        aceitaemail,
      },
    },
  });
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;

  const sql =
    'UPDATE usuario SET "nome" = $1, "email" = $2, "senha" = $3, WHERE "id" = $4';
  const response = await pool.query(sql, [nome, email, senha, id]);
  console.log(response);
  res.json({
    message: "ok",
    body: {
      usuario: {
        id,
        nome,
        email,
        senha,
      },
    },
  });
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM usuario WHERE "id" = $1';
  const response = await pool.query(sql, [id]);
  console.log("response");
  res.json(`Usuario id: ${id} deleted from database`);
};

const login = async (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;
  const sql = 'SELECT * from usuario where "email" = $1 and "senha" = $2';
  const response = await pool.query(sql, [email, senha]);

  console.log(response.rows);

  res.json({
    message: `Usuário: ${email} logado com sucesso`,
    body: {
      usuario: {
        email,
      },
    },
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  login,
};
