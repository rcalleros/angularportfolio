import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent {
 signinForm: FormGroup;
 username: FormControl = new FormControl('', [Validators.email,Validators.required]);
 password: FormControl = new FormControl('', Validators.required);

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit(): void {
    this.signinForm = new FormGroup({
      username: this.username,
      password: this.password,
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.username.errors);
    console.warn(this.signinForm.get('username').valid);
  }

}
