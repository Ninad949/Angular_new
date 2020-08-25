
  

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { IDatabase} from './database';

 const dabaseURL = '/src/app/database/database.json';
 import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';



 @Injectable({
    providedIn: 'root'
  }) 

   
 @Injectable()
 export class DatabaseService {
 

  private dabaseURL = '/src/app/database/database.json';
     constructor(private http: HttpClient) { }

     getProducts(): Observable<IDatabase[]> {
      return this.http.get<IDatabase[]>(this.dabaseURL)
        .pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
    }
  
    getProduct(id: number): Observable<IDatabase | undefined> {
      return this.getProducts()
        .pipe(
          map((database: IDatabase[]) => database.find(d => d.databaseID === id))
        );
    }
  
    private handleError(err: HttpErrorResponse) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }

    getCarsSmall() {
      return this.http.get<any>('/src/app/database/database.json')
      .toPromise()
      .then(res => <IDatabase[]>res.data)
      .then(data => { return data; });
    }
     

     }
 

