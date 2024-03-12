import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router:Router){}

  loginForm = new FormGroup(
    {
      email: new FormControl(),
      password: new FormControl()
    }
  )



  login(){
    if(this.loginForm.value.email == "amandaviet2021@gmail.com" && this.loginForm.value.password == "kumar_3639"){
      this.router.navigateByUrl('/layout/home')
    }else{
      this.router.navigateByUrl('/layout/login')
    }
  }
  ngOnInit(): void {

  }
}
