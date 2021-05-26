import { Injectable } from '@angular/core';
import { Employee } from 'src/model/Employee';
import { Role } from 'src/model/Role';


@Injectable({
  providedIn: 'root'
})
export class RoleandemployeeService {

  roleArray:Role[] = [
    new Role(1,"Developer"),
    new Role(2,"Database Admin"),
    new Role(3,"Cloud Support"),
    new Role(4,"Team Lead"),
    new Role(5,"Manager")
  ]


  employeeArray:Employee[] = [
    new Employee(1,"Gaurang",1,true),
    new Employee(2,"Harsh",3,true),
    new Employee(3,"Riya",4,true),
    new Employee(4,"Lakhan",4,false),
    new Employee(5,"ABC",1,false),
    new Employee(6,"XYZ",2,false),
    new Employee(7,"ewqwe",5,true),
    new Employee(8,"Gzxzxc",1,true),
    new Employee(9,"zxczxcasd",2,true),
    new Employee(10,"snkcjndsa",3,true),
    new Employee(11,"xcasd",5,false),
    new Employee(12,"zxcsad",4,true),
    new Employee(13,"gaabsac",1,false),
    
  ]
  constructor() { }
}
