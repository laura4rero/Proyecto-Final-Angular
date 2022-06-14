import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { FormRegister } from '../interfaces/Iregister';
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private  HttpClient:HttpClient, private router: Router) { }

  baseUrl = "http://localhost:3000/users";

  getUser():Observable<FormRegister[]>
  {
    return this.HttpClient.get<FormRegister[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  login(arrFormVals: FormRegister):Observable<FormRegister>
  {
    let url = this.baseUrl+'/?email='+arrFormVals['email']+'&password='+arrFormVals['password'];
    console.log(url, arrFormVals);
    return this.HttpClient.get<FormRegister>(url);
  }

  postUser(arrFormVals: FormRegister):Observable<FormRegister>
  {
    return this.HttpClient.post<FormRegister>(this.baseUrl, arrFormVals);
  }

  private handleError(errorReponse: HttpErrorResponse)
  {
    if(errorReponse.error instanceof ErrorEvent)
    {
      console.log('Client side error', errorReponse.error);
    }
    else
    {
      console.log('Server side error', errorReponse);
    };

    return throwError('Hay un error y lo estamos arreglando');
  }
}
