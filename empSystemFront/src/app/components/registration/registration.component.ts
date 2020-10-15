import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms'
import { HttpRequestService } from '../../services/user.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   registerForm: FormGroup
  constructor(private fb:FormBuilder, private service: HttpRequestService) { }

  get f() { return this.registerForm.controls; }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
    })
  }

  get name(){
    return this.registerForm.get('name')
  }

  get email(){
    return this.registerForm.get('email')
  }

  get password(){
    return this.registerForm.get('password')
  }

  register(){
    this.service.createUser(this.registerForm.value).subscribe(res => {
      console.log(res);
    })
  }

}
