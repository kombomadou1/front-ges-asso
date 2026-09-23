import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  private apiUrl = 'http://localhost:3000/users';
  private associationUrl = 'http://localhost:3000/associations';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<any>(this.apiUrl);
  }
  getUser(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getAllAssociations() {
    return this.http.get<any>(this.associationUrl);
  }
  getAssciation(id: string) {
    return this.http.get<any>(`${this.associationUrl}/${id}`);
  }

  createUser(data: CreateUserDto): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  editUser(id: string, data: any) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteUser(id: string) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, );
  }
}

export interface CreateUserDto {
  id: number;
  password: string;
  lastname: string;
  firstname: string;
  age: number;
}
