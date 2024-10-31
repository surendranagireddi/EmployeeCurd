import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../models/employee.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit {
  
  editEmployeeRequest :Employee= {
    id : 0,
    name : '',
    email :'',
    phonenumber :'',
    salary :0,
    department :''
  } ;

  constructor(private route: ActivatedRoute, private empservice : EmployeesService , private router : Router){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
        next: (params)=>
        {
         const id = params.get('id') ;
         if(id){
          // call the api
          const empId = Number(id);
          this.empservice.getEmployee(empId).subscribe(
            {
              next: (response) =>
              {
                this.editEmployeeRequest= response
              }
            }
          )


         }
        }
      }
    )
  }

  updateMethod() {
    this.empservice.updateEmployee(this.editEmployeeRequest.id, this.editEmployeeRequest)
    .subscribe(
     {
      next:(respose) =>
      {
         this.router.navigate(['employees'])
      }
     }
    )
    }
      
   deleteEmployee(id : number){
     this.empservice.deleteEmployee(id)
     .subscribe({
      next:(response)=>
      {
        this.router.navigate(['employees']);
      }
     })
   }
}
