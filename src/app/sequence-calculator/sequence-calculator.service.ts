import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { SequenceCalculatorVO } from '../models/SequenceCalculatorVO.model';

@Injectable({
  providedIn: 'root'
})
export class SequenceCalculatorService {

  private API_ALTICCI = `http://localhost:8080/alticci`;

  constructor(private http: HttpClient) { }

  calculateAlticciSequenceNumber(indexNumber: number): Observable<any> {
    return this.http.get(`${this.API_ALTICCI}/memoizationCache/${indexNumber}`);
  }

  checkSequenceCache(): Observable<any> {
    return this.http.get(`${this.API_ALTICCI}/checkMemoCache`);
  }
}
