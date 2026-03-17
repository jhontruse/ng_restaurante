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

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    InputText,
    IconField,
    InputIcon,
    Checkbox,
    Button
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


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
  };

}
