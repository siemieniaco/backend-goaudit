import firebase from '../config/db';
import "firebase/auth";

const firestore = firebase.firestore();

interface User {
  email:string;
  senha:string;
}
class UserController {

  public async createUser(request, response){

    const{email, senha}:User = request.body;

    firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then((user) => {
        firestore.collection('Usuários').doc().set(email);
        response.redirect('./home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        response.send();
      });
    }

    public async signUser(request,response){
    
    const{email, senha}:User = request.body;

    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((user) => {

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  }

export const userControllers = new UserController();