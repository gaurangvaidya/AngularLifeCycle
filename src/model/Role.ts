export class Role{

    roleId:number;
    roleName:string;
    


    

    constructor(roleId?:number,roleName?:string){

        
        this.roleId = roleId?roleId:0;
        this.roleName = roleName?roleName:"";
        

    }

}