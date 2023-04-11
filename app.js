"use strict"
function Employee(EmployeeID, FullName, Department, Level,  Salary) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.Image = Image;
    this.Salary = Salary;

}
Employee.prototype.calc = function(){

    document.write( Math.floor(Math.random() * max));


}
Employee.prototype.render = function () {

    
    document.write(`the name is :${this.FullName}the salary: ${this.Salary} `)
}

let GhaziSamer = new Employee(1000, 'GhaziSamer', 'Administration', 'Senior',2300);
let LanaAli = new Employee(1001, 'LanaAli', 'Finance', 'Senior',2300);
let TamaraAyoub = new Employee(1002, 'TamaraAyoub', 'Marketing', 'Senior',2300);
let SafiWalid = new Employee(1003, 'SafiWalid', '	Administration', 'Mid-Senior',2000);
let OmarZaid = new Employee(1004, 'OmarZaid', 'Development', 'Senior',2300);
let RanaSaleh = new Employee(1005, 'RanaSaleh', 'Development', 'junior',1000);
let HadiAhmad = new Employee(1006, 'HadiAhmad', 'Finance', 'Mid-Senior',2000);

GhaziSamer.render();
LanaAli.render();
TamaraAyoub.render();
SafiWalid.render();
OmarZaid.render();