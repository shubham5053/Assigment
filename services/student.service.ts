import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Student } from '../student';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = "http://localhost:3000/register";
  constructor(private Http: HttpClient) { }
  createStudent(student: any): Observable<Student[]> {
    return this.Http.post<Student[]>(`${this.baseUrl}`, student)
  }
  getstudent(): Observable<Student[]> {
    return this.Http.get<Student[]>(`${this.baseUrl}`);
  }

}
