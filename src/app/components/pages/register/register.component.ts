import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  loginForm!: FormGroup

  registered:boolean = false

  submit(){
    if(this.loginForm.invalid){
      return
    }
    this.registered = true
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get user(){
    return this.loginForm.get('user')!
  }
  get email(){
    return this.loginForm.get('email')!
  }
  get birthDate(){
    return this.loginForm.get('birthDate')!
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
