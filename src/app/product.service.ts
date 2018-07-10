import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
export interface IMessage {
  name?: string,
  email?: string,
  phone?: number,
  message?: string
}
@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  private _url: string = "/assets/data.json";
  constructor(private http:HttpClient) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this._url);

  }

  getProduct(name: string): Observable<any> {
    const url ="/assets/data.json";
    return this.http.get(url,
    ).pipe(
      map(this.extractData,httpOptions),map((data: Array<any>) => {
        return data.find(x => x.name === name)
      }),


      catchError(this.handleError));
  }
  

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
};


sendEmail(message: IMessage): Observable<IMessage> | any {

  const body = 'data=' + JSON.stringify(message);

  return this.http.post('http://localhost:80/email.php', body)
  .pipe(map(response => { 
      console.log('Sending email was successfull', response);
      return response;
    })),
     catchError(error => {
      console.log('Sending email got error', error);
      return Observable.throw(error)
    })
}
}
