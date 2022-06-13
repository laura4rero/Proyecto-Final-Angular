import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { FormRegister } from '../interfaces/Iregister';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private  HttpClient:HttpClient) { }

  baseUrl = "http://localhost:3000/users";

  getUser():Observable<FormRegister[]>
  {
    return this.HttpClient.get<FormRegister[]>(this.baseUrl).pipe(catchError(this.handleError));
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
