const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

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

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));