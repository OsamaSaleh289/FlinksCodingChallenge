import { Component } from '@angular/core';
import {AuthService} from './service/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  email: string;
  password: string;
  link: string;
  companyName: string;


  constructor(public authService : AuthService, public http: HttpClient){}

  signup(){
    this.authService.signup(this.email, this.password);
    

  }


  login(){
    this.authService.login(this.email, this.password);




  }


  logout(){
    this.authService.logout();



  }

  getCompanyName(){
    if(this.link.includes('//')){
      //Remove http://
      this.link = this.link.split('//')[1];


    }

    if(this.link.includes('/')){
      //Remove /about
      this.link = this.link.split('/')[0]

    }

    if(this.link.includes('www.')){
      this.link = this.link.split('www.')[1];


    }

    //Server interaction code
    const serverURL = "https://localhost:5001/api/getName/" + this.link;
    fetch(serverURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'



      }
      
      })
      .then((response) => response.text())
      .then((name) => {
        this.companyName = name;


      })

      .catch((error) => {
        console.error(error);



      })


  }
  
}

