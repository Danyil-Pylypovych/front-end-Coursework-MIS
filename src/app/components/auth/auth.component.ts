import { Component } from '@angular/core';
import { CheckFormService } from '../../check-form.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  
  name!: String;
  password!: String;

  constructor(private checkForm: CheckFormService,
    private router: Router,
    private authServise: AuthService) { }

    clientLoginClick() {
      const patient = {
        name: this.name,
        password: this.password
      }

      if(!this.checkForm.checkName(patient.name)) {
        alert("ФІО не введено")
        return false
      } else if(!this.checkForm.checkPassword(patient.password)) {
        alert("Пароль не введен")
        return false
      }
      console.log("lol")
      this.authServise.authPatient(patient).subscribe(data => {
        if(!data.success) {
          alert(data.msg)
        } else {
          alert("Успішна авторизація")
        }
        this.router.navigate(['dashboard'])
        this.authServise.storePatient(data.token, data.user)
      })
      this.router.navigate(['dashboard'])
      return patient
    }
}
