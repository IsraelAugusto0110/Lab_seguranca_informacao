const { Router } = require("express");

const router = Router();

const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/index.Usercontroller");

router.get("/listarUsuarios", getUsers);
router.get("/listarUsuarios/:id", getUserById);
router.post("/criarUsuario", createUser);
router.put("/updateUsuario/:id", updateUser);
router.delete("/deleteUsuario/:id", deleteUser);

module.exports = router;
