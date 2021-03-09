import firebase from '../config/db';
import Cliente from '../models/Cliente';

const firestore = firebase.firestore();

class ClienteController {

public async novoCliente(request, response){

    try{

        const {nome_cliente, cpf, data_cliente, email_cliente, endereco} = request.body;

        const n = Math.floor(Math.random() * 1000000000);
        const codigo_c = n.toString();

        await firestore.collection('Clientes').doc(codigo_c)
        .set({nome_cliente, cpf, data_cliente, email_cliente, endereco, cod_cliente:codigo_c});

        response.send('Cliente adicionado!');

        }catch(error){
            response.status(400).send('Ocorreu um erro!');
            response.send(Error);
        }
    }

    public async getAllClientes(request, response){
        try {
            const clientes = firestore.collection('Clientes');
            const data = await clientes.get();
            const clientesArray: Cliente[] = [];
            if(data.empty) {
                response.status(404).send('Cliente não encontrado!');
            }else {
                data.forEach(doc => {
                    const cliente = new Cliente(
                        doc.data().nome_cliente,
                        doc.data().cpf,
                        doc.data().data_cliente,
                        doc.data().email_cliente,
                        doc.data().endereco,
                        doc.data().cod_cliente
                    );
                    clientesArray.push(cliente);
                });
                response.send(clientesArray);
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    public async getCliente(request, response) {
        try{
            const id = request.params.id;
            const cliente = firestore.collection('Cliente').doc(id);
            const data = await cliente.get();

            if(!data.exists) {
                response.status(404).send('Cliente nao encontrado!');
            }else {
                response.send(data.data());
            }
        }catch (error) {
            response.status(400).send(error.message);
        }
    }

    public async attCliente(request, response){
        try {
            const id = request.params.id;
            const data = request.body;
            const cliente =  firestore.collection('Cliente').doc(id);
            await cliente.update(data);
            response.send('As informações do cliente foram atualizadas!');        
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    public async delCliente(request, response){
        try {
            const id = request.params.id;
            await firestore.collection('Cliente').doc(id).delete();
            response.send('Cliente excluido!');
        } catch (error) {
            response.status(400).send(error.message);
        }
    }
}

export const clienteControllers = new ClienteController();