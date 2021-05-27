export class Employee
{
    employeeId:number;
    employeeName:string;
    employeeRoleId:number;
    isActive:boolean;

    constructor(employeeId?:number,employeeName?:string,employeeRoleId?:number,isActive?:boolean){
        this.employeeId = employeeId?employeeId:0;
        this.employeeName = employeeName?employeeName:"";
        this.employeeRoleId = employeeRoleId?employeeRoleId:0;
        this.isActive = isActive?isActive:false;

    }
}