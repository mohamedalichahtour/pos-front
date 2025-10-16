import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { EmployeeBase } from 'src/models/interfaces/employeeBase';
import { Observable } from 'rxjs';
import { EmployeeService } from '../services/employee/employee.service';
import { PagedResponse } from 'src/models/interfaces/pagedResponse';
import { PaginationFilter } from 'src/models/classes/paginationFilter';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
    employees!: EmployeeBase[];
    loading: boolean = true;
    paginationFilter: PaginationFilter ;
    totalRecords: number = 0;

    constructor(private employeeService: EmployeeService) {
        this.paginationFilter = new PaginationFilter();
    }


    ngOnInit() {
      this.loadEmployees();
    }

    loadEmployees() {
      this.employeeService.getEmployees(this.paginationFilter).subscribe((res:PagedResponse<EmployeeBase>) => {
          this.employees = res.list;
          this.totalRecords = res.total_records;
          this.loading = false;
      });
    }


    onPageChanged(event: any) {
      this.paginationFilter = new PaginationFilter (event.first / event.rows + 1, event.rows);
      this.loadEmployees();

    }
}