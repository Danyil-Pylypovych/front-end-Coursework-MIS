import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckFormService {

  constructor() { }

  checkName(name: String | undefined) {
    if(name == undefined) {
      return false
    } else {
      return true
    }
  }

  checkPassword(password: String | undefined) {
    if(password == undefined) {
      return false
    } else {
      return true
    }
  }

  checkCity(city: String | undefined) {
    if(city == undefined) {
      return false
    } else {
      return true
    }
  }

  checkEmail(email: String | undefined) {
    if(email == undefined) {
      return false
    } else {
      return true
    }
  }

  checkPhone(phone: String | undefined) {
    if(phone == undefined) {
      return false
    } else {
      return true
    }
  }

  checkGender(gender: String | undefined) {
    if(gender == undefined) {
      return false
    } else {
      return true
    }
  }
}
