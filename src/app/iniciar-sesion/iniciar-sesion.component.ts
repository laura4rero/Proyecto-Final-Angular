import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DbserviceService } from '../service/dbservice.service';
import { Router } from "@angular/router"
import { json } from 'express';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  loginForm = new FormGroup({});
  dbBoolean: boolean = false;

  constructor(private formB: FormBuilder, private serviceLogin: DbserviceService, private router: Router) { }

  ngOnInit(): void
  {
    this.loginForm = this.formB .group(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d).*$')]),
      remembercheck: new FormControl(null),
      logincheck: new FormControl(null, [Validators.required])
    })
  }

  login=():void=>
  {
    if(this.loginForm.status == 'VALID')
    {
      this.serviceLogin.login(this.loginForm.value).forEach((user)=>
      {
        let jsonUser = user as any
        console.log('respuesta', user, jsonUser.length, jsonUser[0]);
        if(jsonUser.length == 0)
        {
          this.dbBoolean = true;
        }
        else
        {
          this.router.navigate(['/account']);
        };
      });
    }
  }

}
