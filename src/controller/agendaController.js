import { Router } from "express";
import { listar, adicionar, agendaFavorita, buscarNome, apagar, buscarData, alterar} from "../repository/agendaRepository.js";

let server = Router();

server.post('/contato', async (req,resp) => {
    let agenda = req.body;
    let dados = await adicionar(agenda);
    resp.send(dados);
});


server.put('/contato', async (req,resp) =>{
    let id = req.query.id;
    let nm = req.query.nome;

    let dados = await alterar(nm, id);
    resp.send('Contato Alterado!!');
})

server.get('/contato/favoritos', async (req,resp) =>{
    let dados = await agendaFavorita();
    resp.send(dados);
});


server.get('/contato', async (req,resp) =>{
    let dados = await listar();
    resp.send(dados);
});

server.get('/contato/buscar', async (req, resp) =>{
    let nm = req.query.nome;
    let dados = await buscarNome(nm);
    resp.send(dados);
});


server.get('/contato/cadastro', async (req,resp) =>{
    let data1 = req.query.inicio;
    let data2 = req.query.fim;

    let dados = await buscarData(data1,data2);
    resp.send(dados)
});


server.delete('/contato', async (req,resp) =>{
    let id = req.query.id;
    let dados = await apagar(id);
    resp.send('Agenda Apagada com sucesso!!')
});



export default server