import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {AuthService} from "../../servises";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {
  form: FormGroup;
  error: boolean;

  constructor(private router: Router,
              private authService: AuthService) {
    this._initForm()
  }

  clientRegisterClick() {
    this.authService.register(this.form.value).subscribe({
      next: () => {
        console.log('done')
        this.router.navigate(['/login'])
      },
      error: (e) => {
        this.error = true
        console.log(e);
      }
    })
  };

  _initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      birth: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      isDoctor: new FormControl(false, [Validators.required]),
      specialty: new FormControl('',),
    })
  };
}
