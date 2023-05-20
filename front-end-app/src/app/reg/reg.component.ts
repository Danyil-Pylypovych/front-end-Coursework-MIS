import { Component } from '@angular/core';
import { CheckFormService } from '../check-form.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Event } from '@angular/router';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {
  
  name!: String;
  password!: String;
  city!: String;
  email!: String;
  phone!: String;
  gender!: String;

  constructor(private checkForm: CheckFormService,
    private router: Router,
    private authServise: AuthService) { }

  clientRegisterClick() {
    const patient = {
      name: this.name,
      password: this.password,
      city: this.city,
      email: this.email,
      phone: this.phone,
      gender: this.gender
    }

    if(!this.checkForm.checkName(patient.name)) {
      alert("ФІО не введено")
      return false
    } else if(!this.checkForm.checkPassword(patient.password)) {
      alert("Пароль не введен")
      return false
    } else if(!this.checkForm.checkCity(patient.city)) {
      alert("Місто не введен")
      return false
    } else if(!this.checkForm.checkEmail(patient.email)) {
      alert("Email не введен")
      return false
    } else if(!this.checkForm.checkPhone(patient.phone)) {
      alert("Телефон не введен")
      return false
    } else if(!this.checkForm.checkGender(patient.gender)) {
      alert("Гендер не введен")
      return false
    } else {
      this.authServise.registerPatient(patient).subscribe(data => {
        console.log("Я дійшов")
        if(!data.success) {
          alert(data.msg)
          this.router.navigate(['reg'])
        } else {
          alert(data.msg)
          this.router.navigate(['auth'])
        }
      })
      this.router.navigate(['auth'])
      return patient
    }

    
  }
}
