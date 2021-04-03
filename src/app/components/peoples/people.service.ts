import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {People} from "./people.model";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  baseUrl = 'http://localhost:3001/people'

  constructor(private snackBar: MatSnackBar,
              private http:HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  createPeople(people: People): Observable<People>{
    return this.http.post<People>(this.baseUrl+"/create", people).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('An error has occurred', true)
    return EMPTY
  }

  read(): Observable<People[]> {
    return this.http.get<People[]>(this.baseUrl)
  }

  readById(id: string): Observable<People>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<People>(url)
  }

  update(people: People): Observable<People>{
    const url = `${this.baseUrl}/update/${people.id}`
    return this.http.put<People>(url, people)
  }

  delete(id: number): Observable<People>{
    const url = `${this.baseUrl}/delete/${id}`
    return this.http.delete<People>(url)
  }
}
