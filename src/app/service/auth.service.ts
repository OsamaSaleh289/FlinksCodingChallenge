import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>

  constructor(private firebaseAuth: AngularFireAuth) { 
    this.user = firebaseAuth.authState;

  }

  //Bulk of our authentication logic
  signup(email: string, password: string){
    this.firebaseAuth.auth
    .createUserWithEmailAndPassword(email,password)
    .then(value => {
      console.log("Success!", value);


    })

    .catch(err => {
      //Maybe better to print a Screen Toast Message
      console.log("Error!", err.message);



    })






  }


  login(email: string, password: string){
    this.firebaseAuth.auth
    .signInWithEmailAndPassword(email,password)
    .then(value => {
      console.log("Login Successful!", value);


    })

    .catch(err => {
      //Maybe better to print a Screen Toast Message
      console.log("Error!", err.message);



    })



  }



  logout(){
    this.firebaseAuth.auth.signOut();




  }

}
