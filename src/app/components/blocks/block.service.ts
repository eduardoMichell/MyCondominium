import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {Block} from "./block.model";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  baseUrl = 'http://localhost:3001/block'

  constructor(private snackBar: MatSnackBar,
              private http:HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  createBlock(block: Block): Observable<Block>{
    return this.http.post<Block>(this.baseUrl + "/create", block).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('An error has occurred', true)
    return EMPTY
  }

  read(): Observable<Block[]> {
    return this.http.get<Block[]>(this.baseUrl)
  }

  readById(id: string): Observable<Block>{
      const url = `${this.baseUrl}/${id}`
      return this.http.get<Block>(url)
  }

  update(block: Block): Observable<Block>{
    const url = `${this.baseUrl}/update/${block.id}`
    return this.http.put<Block>(url, block)
  }

  delete(id: number): Observable<Block>{
    const url = `${this.baseUrl}/delete/${id}`
    return this.http.delete<Block>(url)
  }


}
