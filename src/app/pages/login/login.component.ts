import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputText, InputTextModule} from 'primeng/inputtext';
import {FloatLabel} from 'primeng/floatlabel';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputGroup} from 'primeng/inputgroup';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {Checkbox} from 'primeng/checkbox';
import {Button} from 'primeng/button';
import {LogoPrincipalComponent} from '../shared/icons/logo-principal/logo-principal.component';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    InputText,
    IconField,
    InputIcon,
    Checkbox,
    Button,
    LogoPrincipalComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoading: boolean = false;
  isPasswordVisible: boolean = false;


  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
      checkbox: ['']
    });
  }

  ngOnInit(): void {

  }


  onSubmit(): void {
    this.isLoading = true;
    setTimeout(() => {
      console.log(this.loginForm.value);
      // aquí va tu llamada al servicio
      this.isLoading = false;
    }, 1000);
  };

  protected visiblePassword() {
    if (this.isPasswordVisible) {
      this.isPasswordVisible = false;
      return;
    } else {
      this.isPasswordVisible = true;
    }
  }

  protected redireccion() {

  }
}
