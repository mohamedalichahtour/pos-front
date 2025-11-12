import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PagedResponse } from 'src/models/interfaces/pagedResponse';
import { EmployeeBase } from 'src/models/interfaces/employeeBase';
import { baseUrl } from 'src/models/baseUrl';
import { PaginationFilter } from 'src/models/classes/paginationFilter';
import { EmployeeFilter } from 'src/models/classes/employeeFilter';
import { ImportPossibleFields } from 'src/models/interfaces/importPossibleFields';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(employeeFilter: EmployeeFilter) {
    let params = new HttpParams()
        .set("name_substr", employeeFilter.name_substr as string)
        .set("page_size", employeeFilter.page_size)
        .set("page_number", employeeFilter.page_number);

    const httpOptions = {params}
    const endPointUrl = baseUrl + 'employee/all'
    return this.http.get<PagedResponse<EmployeeBase>>(endPointUrl,httpOptions);
    }

    getOptions() {
      const endPointUrl = baseUrl + 'employee/import/possible-fields'
      return this.http.get<ImportPossibleFields>(endPointUrl)
    }
} 