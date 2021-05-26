import { Component, OnInit } from '@angular/core';
import { RoleandemployeeService } from '../roleandemployee.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers:[RoleandemployeeService]
})
export class ParentComponent implements OnInit {

  role:any;

  constructor(public roleandemployee:RoleandemployeeService) { }

  ngOnInit(): void {
  }

}
