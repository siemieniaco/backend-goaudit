import Empresa from '../models/Empresa';
import firebase from '../config/db';
import { Request, Response } from 'express';

const firestore = firebase.firestore();

class EmpresaController {

   public async novaEmpresa(request:Request, response:Response){

    try{

        const {nome_emp, chave_acesso_emp, afiliacao_emp, CNPJ_emp, chave_acesso2_emp} = request.body;

        const user = firebase.auth().currentUser;
        console.log(user);
        const uid = user?.uid;

        const data = new Date();

        const n = Math.floor(Math.random() * 1000000000);
        const codigo_emp = n.toString();

        const empresa = new Empresa(nome_emp, codigo_emp, chave_acesso_emp, data, afiliacao_emp, CNPJ_emp, chave_acesso2_emp, uid);  

        if(request.body.chave_acesso_emp == request.body.chave_acesso2_emp){
            await firestore.collection('empresa').doc(nome_emp).set(empresa);
            response.send('Empresa adicionada!');

        }else{
            return response.status(400).send('As senhas não correspondem!');
            }
        }catch(error){
            response.status(400).send('Ocorreu um erro!');
        }
    }
/*
    public getAllEmpresa(request, response) {
            try {
                const empresas = firestore.collection('Empresa');
                const data = await empresas.get();
                const empresasArray = [];
                if(data.empty) {
                    response.status(404).send('Nenhuma empresa encontrada!');
                }else {
                    data.forEach(doc => {
                        const student = new Empresa(
                            doc.id,
                            doc.data().firstName,
                            doc.data().lastName,
                            doc.data().fatherName,
                            doc.data().class,
                            doc.data().age,
                            doc.data().phoneNumber,
                            doc.data().subject,
                            doc.data().year,
                            doc.data().semester,
                            doc.data().status
                        );
                        studentsArray.push(student);
                    });
                    res.send(studentsArray);
                }
            } catch (error) {
                res.status(400).send(error.message);
            }
        }
*/

    public async getEmpresa(request, response) {
        try{
            const id = request.params.id;
            const empresa = firestore.collection('Empresa').doc(id);
            const data = await empresa.get();

            if(!data.exists) {
                response.status(404).send('Empresa nao encontrada!');
            }else {
                response.send(data.data());
            }
        }catch (error) {
            response.status(400).send(error.message);
        }
    }

    public async attEmpresa(request, response){
        try {
            const id = request.params.id;
            const data = request.body;
            const empresa =  firestore.collection('Empresa').doc(id);
            await empresa.update(data);
            response.send('Empresa atualizada com sucesso!');        
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    public async delEmpresa(request, response){
        try {
            const id = request.params.id;
            await firestore.collection('Empresa').doc(id).delete();
            response.send('Empresa excluida!');
        } catch (error) {
            response.status(400).send(error.message);
        }
    }
}

export const empresaControllers = new EmpresaController();