import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormControlName} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[ApiService]
})
export class RegistroComponent implements OnInit {
  public restApi: ApiService; 
  public router: Router

  createFormGroup(){
    return new FormGroup({
      nombre: new FormControl(''),
      edad: new FormControl(''),
      correo: new FormControl(''),
      password: new FormControl ('')
    });
  }
  registro:FormGroup;
  constructor() {
    this.registro = this.createFormGroup();
    
   }

  ngOnInit(): void {
  }
  
  onRegistrar(){
    window.alert('Formulario Enviado'),
    console.log(this.registro,


      )
  }

}
