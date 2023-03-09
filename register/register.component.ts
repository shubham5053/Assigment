import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../student';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Mobile: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    age: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    tags: new FormControl('', [Validators.required])
  })
  get f() { return this.registrationForm.controls }

  constructor(private http: Router, private student: StudentService, private formBuilder: FormBuilder) { }
  ngOnInit() {
  }
  goToHomeComponent() {
    this.http.navigate(['./home'])
  }
  goToUserProfile() {
    this.http.navigate(['./user-profile'])
  }
  onSubmit() {

    alert("Registration Successfullay")
    this.save();

  }
  save() {

    this.student.createStudent(this.registrationForm.value).subscribe(data => {
      this.goToUserProfile();

    })
  }



}





