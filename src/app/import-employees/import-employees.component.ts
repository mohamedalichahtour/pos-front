import { Component ,OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';
import { Option } from 'src/libs/matchy/src/models/classes/option';
import { ImportPossibleFields } from 'src/models/interfaces/importPossibleFields';

@Component({
  selector: 'app-import-employees',
  templateUrl: './import-employees.component.html',
  styleUrls: ['./import-employees.component.css']
})
export class ImportEmployeesComponent implements OnInit {
  options: Option[] ;

  constructor(private employeeService: EmployeeService) { 
    this.options  = [];
  }

  ngOnInit(): void {
  }

  async getOptions() {
    this.employeeService.getOptions().subscribe((data: ImportPossibleFields) => {
      this.options = data.possible_fields; 
    })
   }

}
