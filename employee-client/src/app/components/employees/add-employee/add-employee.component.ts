import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../models/employee.model';
import { EmployeesService } from '../../../services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent  implements OnInit{
 
  addEmployeeRequest : Employee= {
    id : 0,
    name : '',
    email :'',
    phonenumber :'',
    salary :0,
    department :''
  } ;
 
  constructor(private empservice: EmployeesService, private router :Router){

  }
  ngOnInit(): void {
  }
  addemployee(){
    //console.log(this.addEmployeeRequest)
    this.empservice.addEmployee(this.addEmployeeRequest).
    subscribe({
      next:(employee) =>{
        this.router.navigate(['employees'])
       // console.log(employee);
      }
    })
    }

}
