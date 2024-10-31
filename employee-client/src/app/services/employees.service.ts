import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { AddEmployeeComponent } from '../components/employees/add-employee/add-employee.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl : string = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
   return  this.http.get<Employee[]>(this.baseApiUrl + 'api/employees');
  }

  addEmployee(addEmployeeRequest :Employee): Observable<Employee>{
    return  this.http.post<Employee>(this.baseApiUrl + 'api/employees', addEmployeeRequest);
  }
 getEmployee(id : number):Observable<Employee>{
  return this.http.get<Employee>(this.baseApiUrl + 'api/employees/'+ id)
 }

 updateEmployee(id : number , updateEmployee: Employee) : Observable<Employee>{
   return this.http.post<Employee>(this.baseApiUrl + 'api/employees/' +id , updateEmployee);
 }

 deleteEmployee(id : number) : Observable<Employee>{
   return this.http.delete<Employee>(this.baseApiUrl +'api/employees/' +id )
 }
 
}
