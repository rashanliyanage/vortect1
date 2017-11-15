import { Component, OnInit } from '@angular/core';
import{ RegisterUser } from './registerUser';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {


registeruser:RegisterUser ={

  firstname: "",
  lastname:  "",
  usernaem: "",
  email:"",
  password: "",
  confirmpassword: "",
  usertype: "",
  spcatagory: "",

}

isRegistrationFailed: boolean = false;

  constructor( private registerservice:RegisterService, private router:Router) { }

  ngOnInit(){

    if(localStorage.getItem("user")) {
      this.router.navigate(['/dashbord']);
    }
  }


//register user

register():void{
  console.log("registration success");
  this.registerservice.register(this.registeruser)
  .then(data => {
    console.log("registration success");
    localStorage.setItem("user", JSON.stringify(data));
    this.router.navigate(['/dashboard']);
  })
  .catch(error => {
    console.log(error);
    this.isRegistrationFailed = true;
  });



}


}
