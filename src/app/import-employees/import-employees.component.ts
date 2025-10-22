import { Component ,OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-import-employees',
  templateUrl: './import-employees.component.html',
  styleUrls: ['./import-employees.component.css']
})
export class ImportEmployeesComponent implements OnInit {
  options =  []

  constructor(private employeeService: EmployeeService) { 

  }

  ngOnInit(): void {
  }

  async getOptions() {
   }

}
