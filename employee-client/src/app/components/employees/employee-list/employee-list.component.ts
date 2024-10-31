import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { CommonModule } from '@angular/common';
import { EmployeesService } from '../../../services/employees.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[]=[];
  /*   { 
    id : 1,
    name: 'deva',
    email: 'dev@gmail.com',
    phone: '9898909',
    salary: 2000.1,
    department: 'IT'
   }
  */
  constructor(private empservice : EmployeesService ){

  }
  ngOnInit(): void {
    this.empservice.getAllEmployees()
    .subscribe({
     next:(employees) =>{
      //console.log((this.employees));  
      this.employees = employees;
     },
     error :(response) =>{
      console.log(response)
     }
     
    })
  }

}
