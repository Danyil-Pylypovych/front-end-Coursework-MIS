import { Component } from '@angular/core';
import { CheckFormService } from '../../check-form.service';
import { Router } from '@angular/router';
import {AuthService} from "../../servises";
import {IAuth} from "../../interfaces";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  email: string;
  password: string;
  error:boolean

  constructor(private checkForm: CheckFormService,
    private router: Router,
    private authService: AuthService) { }

    clientLoginClick():void {
    const form= {email:this.email,password:this.password}
        this.authService.login(form).subscribe({
          next: () => {
            this.error = false
            this.router.navigate(['/cabinet'])
            console.log('success')
          },
          error: (e) => {
            this.error = true
            console.log(e)
          }
        })
      }

}
