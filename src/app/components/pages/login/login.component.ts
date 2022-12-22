import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  connected:boolean = false


  submit(){
    if(this.loginForm.invalid){
      return
    }
    this.connected = true
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get user(){
    return this.loginForm.get('user')!
  }
  get password(){
    return this.loginForm.get('password')!
  }

  passwordSecret: string = 'password'

  showPassword(){
    if(this.passwordSecret === 'password'){

      this.passwordSecret = 'text'
    } else{
      this.passwordSecret = 'password'
    }
  }
}
