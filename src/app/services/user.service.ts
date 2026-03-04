import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { User } from '../models/user.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://peticiones.online/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> { 
    return this.http.get<{ results: User[] }>(this.apiUrl).pipe( map(response => response.results) ); 
  }
}

