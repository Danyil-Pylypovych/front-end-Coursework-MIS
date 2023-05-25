import {Component} from '@angular/core';
import {CheckFormService} from '../../check-form.service';
import {Router} from '@angular/router';
import {AuthService} from "../../servises";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {
  form:FormGroup;
  error:boolean;

  constructor(private checkForm: CheckFormService,
              private router: Router,
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
  }

  _initForm(): void {
    this.form = new FormGroup({
      name:new FormControl('', ),
      email:new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
      birth:new FormControl('', ),
      phone:new FormControl('', ),
      gender:new FormControl('', [Validators.required]),
      isDoctor:new FormControl(false, [Validators.required]),
      specialty:new FormControl('', ),
    })
  }
}
