import firebase from '../config/db';
import  Cliente from '../models/Cliente';
import {Request,Response} from 'express';

const firestore = firebase.firestore();

class ClienteController {

public async novoCliente(request:Request, response:Response){

    try{

        const {nome_c, cpf_cnpj_c, email_c, endereco_c, numero_c} = request.body;

        const n = Math.floor(Math.random() * 1000000000);
        const codigo_c = n.toString();

        const data = new Date();

        const cliente = new Cliente(nome_c, cpf_cnpj_c, data, email_c, endereco_c, codigo_c, numero_c);

        await firestore.collection('clientes').doc(nome_c).set(Object.assign({},cliente));

        response.send('Cliente adicionado!');

        }catch(error){
            response.status(400).send(error.message);
        }
    }

    public async novoCliente(request:Request, response:Response){

        try{
    
            const {nome_c, cpf_cnpj_c, email_c, endereco_c, numero_c} = request.body;
    
            const n = Math.floor(Math.random() * 1000000000);
            const codigo_c = n.toString();
    
            const data = new Date();
    
            const cliente = new Cliente(nome_c, cpf_cnpj_c, data, email_c, endereco_c, codigo_c, numero_c);
    
            await firestore.collection('clientes').doc(nome_c).set(Object.assign({},cliente));
    
            response.send('Cliente adicionado!');
    
            }catch(error){
                response.status(400).send(error.message);
            }
        }

    public async getAllClientes(request:Request, response:Response){
        try {
            const clientes = firestore.collection('clientes');
            const data = await clientes.get();
            const clientesArray: Cliente[] = [];
            if(data.empty) {
                response.status(404).send('Cliente não encontrado!');
            }else {
                data.forEach(doc => {
                    const cliente = new Cliente(
                        doc.data().nome_c,
                        doc.data().cpf_cnpj_c,
                        doc.data().data_c,
                        doc.data().email_c,
                        doc.data().endereco_c,
                        doc.data().cod_c,
                        doc.data().numero_c
                    );
                    clientesArray.push(cliente);
                });
                response.send(clientesArray);
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    public async getClientePers(request:Request, response:Response) {
        try{
            
            const busca = request.params.busca;

            firestore.collection('clientes').doc(busca).onSnapshot((doc) => {
                var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
                console.log(source, "data", doc.data());
            });

            if(!cliente.exists) {
                response.status(404).send('Cliente nao encontrado!');
            }else {
                response.send(cliente.data());
            }
        }catch (error) {
            response.status(400).send(error.message);
        }
    }


    public async getCliente(request:Request, response:Response) {
        try{
            const busca = request.params.busca;
            const cliente = await firestore.collection('clientes').doc(busca).get();

            if(!cliente.exists) {
                response.status(404).send('Cliente nao encontrado!');
            }else {
                response.send(cliente.data());
            }
        }catch (error) {
            response.status(400).send(error.message);
        }
    }

    public async attCliente(request:Request, response:Response){
        try {
            const busca = request.params.busca;
            const data = request.body;
            const cliente =  firestore.collection('clientes').doc(busca);
            await cliente.update(data);
            response.send('As informações do cliente foram atualizadas!');        
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    public async delCliente(request:Request, response:Response){
        try {
            const busca = request.params.busca;
            await firestore.collection('clientes').doc(busca).delete();
            response.send('Cliente excluido!');
        } catch (error) {
            response.status(400).send(error.message);
        }
    }
}

export const clienteControllers = new ClienteController();