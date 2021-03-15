import firebase from '../config/db';
import "firebase/auth";
import { Request, response, Response } from 'express';
import Users from '../models/User';
import Empresa from '../models/Empresa';
import { empresaControllers } from '../controllers/empresaControllers';

const firestore = firebase.firestore();

class UserController {

  public async createUser(request:Request, response:Response){

    const{email_u, senha_u, nome_u, vinculo_emp_u}:Users = request.body;

    if(request.body.vinculo_emp_u){
      empresaControllers.novaEmpresa;
    }

    const usuario = new Users(email_u, senha_u, nome_u, vinculo_emp_u);

    firebase.auth().createUserWithEmailAndPassword(email_u, senha_u)
      .then((user) => {
          firestore.collection('usuarios').doc(nome_u).set(usuario);
          firestore.collection('admin').doc().set(user);
          response.redirect('./home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        response.send();
      });
    }

    public async signUser(request:Request,response:Response){
    
    const{email_u, senha_u}:Users = request.body;

    firebase.auth().signInWithEmailAndPassword(email_u, senha_u)
    .then((user) => {
      response.send('Login realizado com sucesso!');
      response.redirect('./home');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

    public signUserOut(){
      firebase.auth().signOut().then(() => {
        response.send('Você foi desconectado!');
      }).catch((error) => {
        response.send(error.message);
      });
    }
  }

export const userControllers = new UserController();