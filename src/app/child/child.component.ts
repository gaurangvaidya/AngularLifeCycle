
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Role } from 'src/model/Role';
import { Employee } from 'src/model/Employee'
import { RoleandemployeeService } from '../roleandemployee.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers:[RoleandemployeeService]
})
export class ChildComponent implements OnInit,OnChanges,DoCheck {



  @Input() role:Role=new Role();
  

  
  constructor(private service:RoleandemployeeService) {


   }
   
  onlyActive:Employee[]=[];
  employeeArray:Employee[]=[];
   

  ngOnInit(): void {

    this.employeeArray = this.service.getEmployeeData();
    
  }

  ngOnChanges(changes:SimpleChanges)
  {
    
    
    // console.log(changes.roleId.currentValue.roleId);
    // this.onlyActive =  this.employeeArray.filter((value:Employee)=>{

     
    //   return value.isActive && value.employeeRoleId.toString() === changes.roleId.currentValue.roleId;
    // })

    // console.log(this.onlyActive);

    

  }

  ngDoCheck()
  {
    
    
    
    this.onlyActive =  this.service.employeeArray.filter((value:Employee)=>{


           
      return value.isActive && value.employeeRoleId == this.role.roleId;
    })

     

  }

 





}
