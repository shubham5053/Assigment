import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../student';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  students: Student = new Student();
  constructor(private StudentService: StudentService, private route: Router) { }
  ngOnInit(): void {
    this.getStudent();
  }
  getStudent() {
    this.StudentService.getstudent().subscribe((data: any) => {
      this.students = data.pop();
    })
  }
  goToHomeComponent() {
    this.route.navigate(['./home'])
  }
}


