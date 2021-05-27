import { Injectable } from '@angular/core';
import { Employee } from 'src/model/Employee';
import { Role } from 'src/model/Role';


@Injectable({
  providedIn: 'root'
})
export class RoleandemployeeService {

  roleArray:Role[] = [];
  


  employeeArray:Employee[] = [];
  
  constructor() { }

  getEmployeeData(){

     this.employeeArray.push(new Employee(1,"Gaurang",1,true))
     this.employeeArray.push(new Employee(2,"Harsh",3,true))
     this.employeeArray.push(new Employee(3,"Riya",4,true))
     this.employeeArray.push(new Employee(4,"adsadas",4,false))
     this.employeeArray.push(new Employee(5,"ABC",1,false))
     this.employeeArray.push(new Employee(6,"XYZ",2,false))
     this.employeeArray.push(new Employee(7,"ewqwe",5,true))
     this.employeeArray.push(new Employee(8,"Gzxzxc",1,true))
     this.employeeArray.push(new Employee(9,"zxczxcasd",2,true))
     this.employeeArray.push(new Employee(10,"snkcjndsa",3,true))
     this.employeeArray.push(new Employee(11,"xcasd",5,false))
     this.employeeArray.push(new Employee(12,"zxcsad",4,true))
     this.employeeArray.push(new Employee(13,"gaabsac",1,false))

     return this.employeeArray;
    

  }
 
  getRoleArray():Role[]{


    
    this.roleArray.push( new Role(1,"Developer"));
    this.roleArray.push( new Role(2,"Database Admin"));
    this.roleArray.push(new Role(3,"Cloud Support"));
    this.roleArray.push(new Role(5,"Manager"))
    this.roleArray.push( new Role(4,"Team Lead"))
   
    return this.roleArray;
    
  }
    
  
}
