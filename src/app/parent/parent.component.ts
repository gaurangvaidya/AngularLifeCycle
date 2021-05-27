import { Component, OnInit } from '@angular/core';
import { Role } from 'src/model/Role';
import { RoleandemployeeService } from '../roleandemployee.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers:[RoleandemployeeService]
})
export class ParentComponent implements OnInit {

  role:Role= new Role();

  roleArray:Role[] = [];
  constructor(public service:RoleandemployeeService) { }

  ngOnInit(): void {

    
    this.roleArray = this.service.getRoleArray();

    console.log(this.roleArray);
  
  }

  log(x:any){
 
    console.log(x);
  }


}
