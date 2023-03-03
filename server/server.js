const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'whiteToothBanco'
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

// FUNÇÃO LOGIN
app.use('/login', (req, res) => {
  const nome = req.body.username;
  const senha = req.body.password;

  if(nome === "adriano" && senha == 1234){
    res.send({
      token: true
    });
  }else{
    res.send({
      token: false
    });
  } 
});
// -- END FUNÇÃO LOGIN --

// -- FUNÇOES PARA A TABELA FUNCIONARIOS --

// -- LISTAR TODOS OS FUNCIONARIOS --
app.get('/api/funcionarios/get', (req, res) => {
  const sqlSelect = "SELECT F.id_Funcionarios, F.nm_Funcionarios, F.cep, F.logradouro, F.bairro, F.localidade, F.uf, F.numero, F.tel_Funcionarios, C.nm_Cargo FROM Funcionarios as F JOIN Cargo as C ON F.id_Cargo = C.id_Cargo order by F.id_Funcionarios";
  db.query(sqlSelect, (err, result)=>{
    res.send(result);
  })
})

// -- RETORNA SÓ UM FUNCIONARIO --
app.get('/api/funcionarios/get/:id', (req, res) => {
  const userId = req.params.id;
  const sqlSelect = "SELECT F.id_Funcionarios, F.nm_Funcionarios, F.cep, F.logradouro, F.bairro, F.localidade, F.uf, F.numero, F.tel_Funcionarios, C.nm_Cargo FROM Funcionarios as F JOIN Cargo as C ON F.id_Cargo = C.id_Cargo WHERE F.id_Funcionarios=?";
  db.query(sqlSelect, userId, (err, result)=>{
    res.send(result);
  })
})

// -- CADASTRAR FUNCIONARIOS --
app.route('/api/funcionarios/cadastrar').post((req, res) =>{

  const nome = req.body.nome;
  const cep = req.body.cep;
  const logradouro = req.body.logradouro;
  const bairro = req.body.bairro;
  const localidade = req.body.localidade;
  const uf = req.body.uf;
  const numero = req.body.numero;
  const telefone = req.body.telefone;
  const cargo = req.body.cargo;
  const sqlInsert = "INSERT INTO Funcionarios (nm_Funcionarios, cep, logradouro, bairro, localidade, uf, numero, tel_Funcionarios, id_Cargo) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(sqlInsert, [nome, cep, logradouro, bairro, localidade, uf, numero, telefone, cargo], (err, result)=>{ 
    if(err) console.log(err)
    res.json("cadastrado com sucesso!!");
  })
})

// -- ATUALIZAR FUNCIONARIOS --
app.route('/api/funcionarios/atualizar/:id').put((req,res)=>{
  const userId = req.params.id
  const nome = req.body.nome;
  const cep = req.body.cep;
  const logradouro = req.body.logradouro;
  const bairro = req.body.bairro;
  const localidade = req.body.localidade;
  const uf = req.body.uf;
  const numero = req.body.numero;
  const telefone = req.body.telefone;
  const cargo = req.body.cargo;
  const sqlUpdate = "UPDATE Funcionarios SET nm_Funcionarios = ?, cep = ?, logradouro = ?, bairro = ?, localidade = ?, uf = ?, numero = ?, tel_Funcionarios = ?, id_Cargo = ? WHERE id_Funcionarios = ?";
  db.query(sqlUpdate, [nome, cep, logradouro, bairro, localidade, uf, numero, telefone, cargo, userId], (err, result)=>{ 
    if(err) console.log(err)
    result.json("Alterado com sucesso!!");
  })
})

// -- DELETAR FUNCIONARIOS --
app.route('api/funcionarios/deletar/:id').delete((req,res)=>{
  const userId = req.params.id
  const sqlUpdate = "DELETE Funcionarios WHERE id_Funcionarios = ?";
db.query(sqlUpdate, [userId], (err, result)=>{ 
  if(err) console.log(err)
  result.json("Excluido com sucesso!!");
})
})



// -- END FUNÇOES PARA A TABELA FUNCIONARIOS --


// -- FUNCOES PACIENTE --
app.get('/api/pacientes/get', (req, res) => {
  const sqlSelect = "SELECT id_Paciente, nm_Paciente, cep, logradouro, bairro, localidade, uf, numero, tel_Paciente FROM Paciente order by id_Paciente";
  db.query(sqlSelect, (err, result)=>{
    res.send(result);
  })
})

app.route('/api/pacientes/cadastrar').post((req, res) =>{

  const nome = req.body.nome;
  const cep = req.body.cep;
  const logradouro = req.body.logradouro;
  const bairro = req.body.bairro;
  const localidade = req.body.localidade;
  const uf = req.body.uf;
  const numero = req.body.numero;
  const telefone = req.body.telefone;
 
  const sqlInsert = "INSERT INTO Paciente (nm_Paciente, cep, logradouro, bairro, localidade, uf, numero, tel_Paciente) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(sqlInsert, [nome, cep, logradouro, bairro, localidade, uf, numero, telefone], (err, result)=>{ 
    if(err) console.log(err)
    res.json("cadastrado com sucesso!!");
  })
})

app.get('/api/pacientes/get/:id', (req, res) => {
  const userId = req.params.id;
  const sqlSelect = "SELECT id_Paciente, nm_Paciente, cep, logradouro, bairro, localidade, uf, numero, tel_Paciente FROM Paciente WHERE id_Paciente = ?";
  db.query(sqlSelect, userId, (err, result)=>{
    res.send(result);
    console.log(result)
  })
})


app.listen(8080, () => {console.log('API is running on http://localhost:8080/login')});