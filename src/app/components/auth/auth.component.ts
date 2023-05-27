import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from "../../servises";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  email: string;
  password: string;
  error: boolean

  constructor(private router: Router,
              private authService: AuthService) {
  }

  clientLoginClick(): void {
    const form = {email: this.email, password: this.password}
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
