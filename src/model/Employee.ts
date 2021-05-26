export class Employee
{
    employeeId:number;
    employeeName:string;
    employeeRoleId:number;
    isActive:boolean;

    constructor(employeeId:number,employeeName:string,employeeRoleId:number,isActive:boolean){
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeRoleId = employeeRoleId;
        this.isActive = isActive;

    }
}