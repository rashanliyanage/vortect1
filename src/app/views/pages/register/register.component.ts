import { Component, OnInit } from '@angular/core';
import{ RegisterUser } from './registerUser';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
   
isfilled:boolean =false;
ispasswordMatch:boolean =true;
registeruser:RegisterUser ={

  firstname: "",
  lastname:  "",
  username: "",
  email:"",
  password: "",
  confirmpassword: "",
  usertype: "",
  spcatagory: "",

}

isRegistrationFailed: boolean = false;

  constructor( private registerservice:RegisterService, private router:Router) { 

  }

  ngOnInit(){

    if(localStorage.getItem("user")) {
      //this.router.navigate(['dashboard']);
    }
  }
  

//register user

register():void{
  console.log("registration success");
  if(!this.registeruser.firstname || !this.registeruser.lastname || !this.registeruser.username || !this.registeruser.email|| !this.registeruser.password || !this.registeruser.confirmpassword){
        this.isfilled = true;
        console.log('not feeld'+this.isfilled);

  
  
  
}

if(!(this.registeruser.password == this.registeruser.confirmpassword) ){
  this.ispasswordMatch =false;

}else {
  this.registerservice.register(this.registeruser)
  .then(data => {
    console.log("registration success");
    localStorage.setItem("user", JSON.stringify(data));
    this.router.navigate(['/pages/login']);
  })
  .catch(error => {
    console.log(error);
    this.isRegistrationFailed = true;
  });

}

}


}
