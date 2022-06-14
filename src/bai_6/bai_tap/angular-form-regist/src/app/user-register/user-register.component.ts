import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  @Output() submitCreate = new EventEmitter();
  userForm: FormGroup;
  private passValid: boolean;

  constructor() {
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)])
    }, this.validatePassword);
  }

  ngOnInit(): void {
  }



  validatePassword(obj: AbstractControl) {
    const password = obj.get('password').value;
    const confirmPassword = obj.get('confirmPassword').value;
    return password !== confirmPassword ? {passValid: true} : null;
  }

  createUser() {
    console.log(this.userForm);
    if (this.userForm.valid) {
      this.submitCreate.emit(this.userForm.value);
    }
  }
}
