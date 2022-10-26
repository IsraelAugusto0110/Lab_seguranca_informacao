const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//utiliza as rotas dos usuarios
app.use(require("./routes/indexUser"));

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
