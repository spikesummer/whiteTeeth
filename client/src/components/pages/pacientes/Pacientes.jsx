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
        TextField
        } from '@material-ui/core';
import {Edit, Delete, Add} from '@material-ui/icons';

const Pacientes = props => {
    

  const [listaDeFunc, setlistaDeFunc] = useState([]);
  const [listaDePaciente, setlistaDePaciente] = useState({nome:"", cep:"", logradouro:"", bairro:"", localidade:"", uf:"", numero:"", telefone:""});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [camposCadastroCep, setCamposCadastroCep] = useState({cep:"", logradouro:"", bairro:"", localidade:"", uf:""})
  const [newUser, setNewUser] = useState({nome:"", cep:"", logradouro:"", bairro:"", localidade:"", uf:"", numero:"", telefone:""});


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
    }
  };

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
        telefone:"15997624523"
    }

    function getOneUser(id){
      axios.get(`http://localhost:8080/api/pacientes/get/:${id}`)
          .then(response=>setlistaDePaciente(
            {
              nome: response.data.nome,
              cep: response.data.cep,
              logradouro: response.data.logradouro,
              bairro: response.data.bairro,
              localidade: response.data.localidade,
              uf: response.data.uf,
              numero: response.data.numero,
              telefone: response.data.telefone
            })
          )
          .then(response=>console.log(response))
          .catch(error=>console.log(error))       
          console.log(listaDePaciente);
      }

    function getUser(){
        axios.get('http://localhost:8080/api/pacientes/get')
            .then(response=> setlistaDeFunc(response.data))
            .catch(error=>console.log(error))
    }

    function addNewUser(){
        const nome1 = document.getElementById("nome");
        const cep1 = document.getElementById('cep');
        const logradouro1 = document.getElementById('logradouro');
        const bairro1 = document.getElementById('bairro');
        const localidade1 =document.getElementById('localidade');
        const uf1 = document.getElementById('uf');
        const numero1 = document.getElementById('numero');
        const telefone1 = document.getElementById('telefone');
       

         setNewUser({
          nome: toString(nome1.value),
          cep: cep1.value,
          logradouro: logradouro1.value,
          bairro: bairro1.value,
          localidade: localidade1.value,
          uf: uf1.value,
          numero: numero1.value,
          telefone: telefone1.value
        });
        console.log(nome1.value)
        axios.post('http://localhost:8080/api/pacientes/cadastrar', newUser)
        .then(response =>{
            alert(JSON.stringify(response.data));
        })
        .then(handleClose())
        // .then(getUser())
        .catch(error=>console.log(error))
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

    return (
       
        <Caixa>
             <Container>
 
             <div>
       <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
         <DialogTitle>Cadastro de Pacientes</DialogTitle>
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
             </Box>
         </DialogContent>
         <DialogActions>
           <Button onClick={handleClose} sx={{m:1}}>Cancel</Button>
         <Button onClick={addNewUser} sx={{m:1}}>Cadastrar</Button>
       </DialogActions>
     </Dialog>
   </div>
    {/* -- editar --  */}
     <div>
   <Dialog disableEscapeKeyDown open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Editar cadastro de Pacientes</DialogTitle>
         <DialogContent>
           <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
             
               <FormControl fullWidth>
                    <TextField id="nome" label="Nome" placeholder="Digite seu nome"  variant="outlined" value={listaDePaciente.nome}  sx={{m:0.5}}/>
                 </FormControl>
               <FormControl>
                   <TextField id="cep" label="Cep" variant="outlined"  sx={{m:0.5}}/>
               </FormControl>
                 <FormControl fullWidth>
                   <TextField id="logradouro" label="Endereço" variant="outlined" sx={{m:0.5}} />
               </FormControl>
               <TextField id="numero" label="Número" variant="outlined" sx={{m:0.5, width: 100}} />
               <TextField  id="bairro" label="Bairro" variant="outlined" sx={{m:0.5, width:435}} />
               <TextField id="localidade" label="Cidade" variant="outlined" sx={{m:0.5, width:400}} />
               <TextField id="uf" label="Estado" variant="outlined" sx={{m:0.5, width:135}} />
               <TextField id="telefone" label="Celular" variant="outlined" sx={{m:0.5}} />
            </Box>
         </DialogContent>
         <DialogActions>
           <Button onClick={handleCloseEdit} sx={{m:1}}>Cancel</Button>
           <Button onClick={addNewUser} sx={{m:1}}>Atualizar</Button>
         </DialogActions>
       </Dialog>
     </div>
         
                {/* fim editar  */}
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
                                 <TableCell align="center" InputProps={{readOnly: true}}>Endereço</TableCell>
                                 <TableCell align="center">Numero</TableCell>
                                 <TableCell align="center" sx={{width:150}}>Bairro</TableCell>
                                 <TableCell align="center">Cidade</TableCell>
                                 <TableCell align="center">Estado</TableCell>
                                 <TableCell align="center">Celular</TableCell>
                                 <TableCell align="center" sx={{width:120}}>Ações</TableCell>  
                             </TableRow>
                         </TableHead>
                         <TableBody>
                             {listaDeFunc?.map((row) => (
                                 <TableRow
                                 key={row.id_Paciente}
                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                 >
                                     <TableCell component="th" scope="row" align="center">{row.id_Paciente}</TableCell>
                                     <TableCell>{row.nm_Paciente}</TableCell>
                                     <TableCell>{row.cep}</TableCell>
                                     <TableCell>{row.logradouro}</TableCell>
                                     <TableCell>{row.numero}</TableCell>
                                     <TableCell>{row.bairro}</TableCell>
                                     <TableCell>{row.localidade}</TableCell>
                                     <TableCell>{row.uf}</TableCell>
                                     <TableCell>{row.tel_Paciente}</TableCell>
                                   
                                    
                                     <TableCell>
                                         <Tooltip title="Editar">
                                             <IconButton color="primary" aria-label="add an alarm" onClick={()=>{handleClickOpenEdit(); getOneUser(row.id_Paciente)}}>
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
 
export default Pacientes;