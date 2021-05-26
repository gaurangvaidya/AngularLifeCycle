
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Role } from 'src/model/Role';
import { Employee } from 'src/model/Employee'
import { RoleandemployeeService } from '../roleandemployee.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers:[RoleandemployeeService]
})
export class ChildComponent implements OnInit,OnChanges,DoCheck {



  @Input() roleId:number=-1;

  
  constructor(private service:RoleandemployeeService) {


   }
   
  onlyActive:Employee[]|undefined;
   

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges)
  {
    
    

    this.onlyActive =  this.service.employeeArray.filter((value:Employee)=>{

     
      return value.isActive && value.employeeRoleId.toString() === changes.roleId.currentValue;
    })

    console.log(this.onlyActive);

    

  }

  ngDoCheck()
  {
    
    
    // this.onlyActive =  this.service.employeeArray.filter((value:Employee)=>{

     
    //   return value.isActive && value.employeeRoleId == this.roleId;
    // })

    // console.log(this.onlyActive);

  }

 





}
