import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacts } from '../model/class/contacts';
import { Observable,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost:3000/contacts';

  constructor(private http:HttpClient) { }

  addContacts(contacts:Contacts):Observable<any>{
    debugger
    return this.http.post<Contacts>(this.baseUrl,contacts).pipe(
      catchError(this.handleError));
  }
private handleError(error: HttpErrorResponse) {
  console.error('Server Error:', error);
  return throwError(() => new Error('Something went wrong with the request.'));
}
}
