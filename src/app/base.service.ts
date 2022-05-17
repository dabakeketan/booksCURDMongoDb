import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';


@Injectable()
export class BaseService {

  constructor(private http: HttpClient) { }

  getData(URL): Observable<any> {
    return this.http.get<any>(URL).pipe(
      tap(data => {
        if (data) {
          // console.log('Error Message');
        } else {
          // console.log('Data at base', data);
        }
      }, error => {
        // console.log('Error at base service get call', error);
        this.handleError(error);
      }),
    );
  }

  postData(contentType, reqObject, URL): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': contentType });

    return this.http.post<any>(URL, reqObject).pipe(
      tap(data => {
        if (data) {
          console.log('Success');
        } else {
          // console.log('Data at base', data);
        }
      }, error => {
        // console.log('Error at base service post call', error);
        this.handleError(error);
      })
    );
  }

  putData(contentType, reqObject, URL): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': contentType });

    return this.http.put<any>(URL, reqObject).pipe(
      tap(data => {
        if (data) {
          console.log('Success');
        } else {
          // console.log('Data at base', data);
        }
      }, error => {
        // console.log('Error at base service post call', error);
        this.handleError(error);
      })
    );
  }

  deleteData(contentType, reqObject, URL): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': contentType });

    return this.http.delete<any>(URL, reqObject).pipe(
      tap(data => {
        if (data) {
          console.log('Success');
        } else {
          // console.log('Data at base', data);
        }
      }, error => {
        // console.log('Error at base service post call', error);
        this.handleError(error);
      })
    );
  }

  handleError(error) {
    alert(error.message);
  }

}
