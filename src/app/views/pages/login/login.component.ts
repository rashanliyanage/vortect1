import { Component, OnInit } from '@angular/core';
import { User} from './user';
import {FormGroup,FormControl,Validator} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

      form:any;
user:User ={

  username:"",
  password:""

}

  constructor() { }
 
  ngOnInit() {
    

  }

}
