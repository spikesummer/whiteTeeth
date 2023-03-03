import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Caixa } from './styled';
import {Container,
        Stack,
        Button,
        TableContainer,
        Table,
        TableHead,
        TableRow,
        TableCell,
        TableBody,
        Paper,
        IconButton,
        Tooltip,
        TablePagination,
        FormControl,
        Dialog,
        DialogTitle,
        DialogContent,
        Box,
        MenuItem,
        DialogActions,
        TextField,
        InputLabel,
        Select
        } from '@material-ui/core';
import {Edit, Delete, Add} from '@material-ui/icons';

export const Funcionarios = ()=>{

  const [listaDeFunc, setlistaDeFunc] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [camposCadastroCep, setCamposCadastroCep] = useState({cep:"", logradouro:"", bairro:"", localidade:"", uf:""})
  const [newUser, setNewUser] = useState({nome:"", cep:"", logradouro:"", bairro:"", localidade:"", uf:"", numero:"", telefone:"", cargo: parseInt("")});


    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
//=============================================

const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpenEdit(false);
      setCamposCadastroCep(
        {
          cep: "",
          logradouro: "",
          bairro: "",
          localidade: "",
          uf: ""
        });
      setCurrency("");
    }
  };

//============================================
const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
      setCamposCadastroCep(
        {
          cep: "",
          logradouro: "",
          bairro: "",
          localidade: "",
          uf: ""
        });
      setCurrency("");
    }
  };

  // cargos
  const currencies = [
    {
      value: 1,
      label: 'Secretária',
    },
    {
      value: 2,
      label: 'Dentista',
    },
    {
      value: 3,
      label: 'Gestor',
    },
    {
      value: 4,
      label: 'Financeiro',
    },
  ];


  const [currency, setCurrency] = useState({value: 1, label: "Secretária"});

  const handleChange1 = (event) => {
    setCurrency({value: event.target.value, label: event.target.label});
  };
//============================================

    
    useEffect(()=>{
        getUser()
     
    }, [listaDeFunc]);

    const updateUser = {
        nome:"Raimundo Alves",
        cep:"11345-250",
        logradouro:"Rua José Espiríto Santo",
        bairro:"Vila Matias",
        localidade:"São Vicente",
        uf:"sp",
        numero:"248",
        telefone:"15997624523",
        cargo:"2"	
    }
    // -- RETORNA UM UNICO USUARIO
    function getOneUser(id){
      axios.get(`http://localhost:8080/api/funcionarios/get/:${id}`)
          .then(response=>setlistaDeFunc(response.data))
          .catch(error=>console.log(error))
         
    }

    // -- RETORNA TODOS OS USUARIOS --
    function getUser(){
        axios.get('http://localhost:8080/api/funcionarios/get')
            .then(response=> setlistaDeFunc(response.data))
            .catch(error=>console.log(error))
    }

    // -- CRIA NOVO USUARIO --
    function addNewUser(){
        const nome1 = document.getElementById("nome");
        const cep1 = document.getElementById('cep');
        const logradouro1 = document.getElementById('logradouro');
        const bairro1 = document.getElementById('bairro');
        const localidade1 =document.getElementById('localidade');
        const uf1 = document.getElementById('uf');
        const numero1 = document.getElementById('numero');
        const telefone1 = document.getElementById('telefone');
        const cargo1 = document.getElementById('campocargo');

         setNewUser({
          nome: nome1.value,
          cep: cep1.value,
          logradouro: logradouro1.value,
          bairro: bairro1.value,
          localidade: localidade1.value,
          uf: uf1.value,
          numero: numero1.value,
          telefone: telefone1.value,
          cargo: cargo1.value
        });

        console.log(newUser.cargo)
        axios.post('http://localhost:8080/api/funcionarios/cadastrar', newUser)
        .then(response =>{
            alert(JSON.stringify(response.data));
        })
        .catch(error=>console.log(error))
        handleClose();
        getUser();
    }

    function userUpdate(){
        axios.put(`http://localhost:8080/api/funcionarios/atualizar/3`, updateUser )
        .then(response=>{
            alert(JSON.stringify(response.data));
        })
        .catch(error=>console.log(error))
    }

    function buscarCep(cep){
      axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then(response => {
          setCamposCadastroCep(
            {
              cep: response.data.cep,
              logradouro: response.data.logradouro,
              bairro: response.data.bairro,
              localidade: response.data.localidade,
              uf: response.data.uf
            });
          
        })
        .catch(error => console.log(error));
      
    }

    return(
        <Caixa>
            <Container>

            <div>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Cadastro de Funcionários</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl fullWidth>
                <TextField id="nome" label="Nome" placeholder="Digite seu nome"  variant="outlined" sx={{m:0.5}}/>
            </FormControl>
            <FormControl>
              <TextField id="cep" label="Cep" variant="outlined" sx={{m:0.5}} onBlur={(e)=>{buscarCep(e.target.value)}}/>
            </FormControl>
            <FormControl fullWidth>
              <TextField id="logradouro" label="Endereço" variant="outlined" sx={{m:0.5}} value={camposCadastroCep.logradouro}/>
            </FormControl>
            <TextField id="numero" label="Número" variant="outlined" sx={{m:0.5, width: 100}} />
            <TextField  id="bairro" label="Bairro" variant="outlined" sx={{m:0.5, width:435}} value={camposCadastroCep.bairro}/>
            <TextField id="localidade" label="Cidade" variant="outlined" sx={{m:0.5, width:400}} value={camposCadastroCep.localidade}/>
            <TextField id="uf" label="Estado" variant="outlined" sx={{m:0.5, width:135}} value={camposCadastroCep.uf}/>
            <TextField id="telefone" label="Celular" variant="outlined" sx={{m:0.5}}/>
            
            <FormControl sx={{ m: 0.5, minWidth: 150 }}>
              <InputLabel>Cargo</InputLabel>
              <Select
                id="campocargo"
                value={currency.value}
                label="Cargo"
                onChange={() => handleChange1}
              >
                {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value} >
                  {option.label}
                </MenuItem>
              ))}
              </Select>
            </FormControl>
            
            
            
            {/* <TextField
              id="campocargo"
              select
              label="Cargo"
              value={currency.value}
              onChange={()=>handleChange1}
              sx={{m:0.5, width: 150}}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value} >
                  {option.label}
                </MenuItem>
              ))}
            </TextField> */}
          
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{m:1}}>Cancel</Button>
          <Button onClick={addNewUser} sx={{m:1}}>Cadastrar</Button>
        </DialogActions>
      </Dialog>
    </div>
    {/* -- editar -- */}
      <div>
    <Dialog disableEscapeKeyDown open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Editar cadastro de Funcionários</DialogTitle>
        <DialogContent>
          {listaDeFunc?.map((row) => (
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl fullWidth>
                <TextField id="nome" label="Nome" placeholder="Digite seu nome"  variant="outlined" value={row.nm_Funcionarios} sx={{m:0.5}}/>
            </FormControl>
            <FormControl>
              <TextField id="cep" label="Cep" variant="outlined" value={row.cep} sx={{m:0.5}}/>
            </FormControl>
            <FormControl fullWidth>
              <TextField id="logradouro" label="Endereço" variant="outlined" sx={{m:0.5}} value={row.logradouro}/>
            </FormControl>
            <TextField id="numero" label="Número" variant="outlined" sx={{m:0.5, width: 100}} value={row.numero}/>
            <TextField  id="bairro" label="Bairro" variant="outlined" sx={{m:0.5, width:435}} value={row.bairro}/>
            <TextField id="localidade" label="Cidade" variant="outlined" sx={{m:0.5, width:400}} value={row.localidade}/>
            <TextField id="uf" label="Estado" variant="outlined" sx={{m:0.5, width:135}} value={row.uf}/>
            <TextField id="telefone" label="Celular" variant="outlined" sx={{m:0.5}} value={row.tel_Funcionarios}/>
           
            <TextField
              id="cargo"
              select
              label="Cargo"
              value={currency}
              onChange={handleChange1}
              sx={{m:0.5, width: 150}}
            >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            </TextField>
          </Box>
           ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} sx={{m:1}}>Cancel</Button>
          <Button onClick={addNewUser} sx={{m:1}}>Atualizar</Button>
        </DialogActions>
      </Dialog>
    </div>
         
              {/* fim editar */}
                <Stack direction="row" spacing={2} sx={{ mt:5 }}>
                    <Button variant="contained" startIcon={<Add/>} onClick={handleClickOpen}>
                    Cadastrar
                    </Button>
                </Stack>

                <TableContainer component={Paper} sx={{mt:5, maxHeight: 720}}>
                    <Table size="small" aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{width:50}}>ID</TableCell>
                                <TableCell align="center" sx={{width:150}}>Nome</TableCell>
                                <TableCell align="center" sx={{width:110}}>CEP</TableCell>
                                <TableCell align="center" InputProps={{
                                readOnly: true,
                                }}>Endereço</TableCell>
                                <TableCell align="center">Numero</TableCell>
                                <TableCell align="center" sx={{width:150}}>Bairro</TableCell>
                                <TableCell align="center">Cidade</TableCell>
                                <TableCell align="center">Estado</TableCell>
                                <TableCell align="center">Celular</TableCell>
                                <TableCell align="center">Cargo</TableCell>
                                <TableCell align="center" sx={{width:120}}>Ações</TableCell>  
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listaDeFunc?.map((row) => (
                                <TableRow
                                key={row.id_Funcionarios}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">{row.id_Funcionarios}</TableCell>
                                    <TableCell>{row.nm_Funcionarios}</TableCell>
                                    <TableCell>{row.cep}</TableCell>
                                    <TableCell>{row.logradouro}</TableCell>
                                    <TableCell>{row.numero}</TableCell>
                                    <TableCell>{row.bairro}</TableCell>
                                    <TableCell>{row.localidade}</TableCell>
                                    <TableCell>{row.uf}</TableCell>
                                    <TableCell>{row.tel_Funcionarios}</TableCell>
                                    <TableCell>{row.nm_Cargo}</TableCell>
                                    
                                    <TableCell>
                                        <Tooltip title="Editar">
                                            <IconButton color="primary" aria-label="add an alarm" onClick={()=>{handleClickOpenEdit(); getOneUser(row.id_Funcionarios)}}>
                                                <Edit />
                                            </IconButton>
                                        </Tooltip>    
                                        <Tooltip title="Deletar">
                                            <IconButton color="default" aria-label="add an alarm">
                                                <Delete />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> 
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        labelRowsPerPage="Registros por página"
                        component="div"
                        count={listaDeFunc.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        />   
            </Container>
        </Caixa>
    )
}