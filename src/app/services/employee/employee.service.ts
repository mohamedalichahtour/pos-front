import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PagedResponse } from 'src/models/interfaces/pagedResponse';
import { EmployeeBase } from 'src/models/interfaces/employeeBase';
import { baseUrl } from 'src/models/baseUrl';
import { PaginationFilter } from 'src/models/classes/paginationFilter';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(paginationFilter: PaginationFilter) {
    let params = new HttpParams()
        .set('page_size', paginationFilter.page_size)
        .set('page_number', paginationFilter.page_number);

    const httpOptions = {params}
    const endPointUrl = baseUrl + 'employee/all'
    return this.http.get<PagedResponse<EmployeeBase>>(endPointUrl,httpOptions);
    }
} 