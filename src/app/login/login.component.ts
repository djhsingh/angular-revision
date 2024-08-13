import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  error!: String;
  isValid!:boolean;
  constructor(private fb: FormBuilder,private route:Router,private authenticate:AuthenticateService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.username);
    console.log('Password', form.value.password);
    if(form.value.username != form.value.password){
        this.error = "Invalid Credentials";
        this.isValid=false;
    } else{
        console.log('Welcome ',form.value.username);
        localStorage.setItem("auth",form.value.username);
        this.isValid=true;
        this.route.navigate(
          ['/welcome'],
          { queryParams: { username: form.value.username } }
        );
    }
  }
}