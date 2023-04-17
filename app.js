"use strict"
let allEmployee = [];
function Employee(EmployeeID, FullName, Department, Level, image, Salary) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.image = image;
    this.Salary = Salary;
    allEmployee.push(this);
}
Employee.prototype.calcSalary = function (min, max) {
    
        this.Salary = Math.floor(Math.random() * (min - max +1)) + min;
}

Employee.prototype.render = function () {
    document.write(`the name is :${this.FullName}the salary : ${this.Salary} `)
}


let GhaziSamer = new Employee(1000, 'GhaziSamer', 'Administration', 'Senior', '');
let LanaAli = new Employee(1001, 'LanaAli', 'Finance', 'Senior', '', );
let TamaraAyoub = new Employee(1002, 'TamaraAyoub', 'Marketing', 'Senior', '' );
let SafiWalid = new Employee(1003, 'SafiWalid', '	Administration', 'Mid-Senior', '');
let OmarZaid = new Employee(1004, 'OmarZaid', 'Development', 'Senior', '' );
let RanaSaleh = new Employee(1005, 'RanaSaleh', 'Development', 'junior', '' );
let HadiAhmad = new Employee(1006, 'HadiAhmad', 'Finance', 'Mid-Senior', '');



for (let i = 0; i < allEmployee.length; i++) {
    if(this.Level == 'Senior'){
    allEmployee[i].calcSalary(1500,2000);
    }
    else if (this.Level == 'Mid-senior'){
        allEmployee[i].calcSalary(1000,1500);
    }
    else(this.Level == 'junior')
    allEmployee[i].calcSalary(500,1000);
    

    allEmployee[i].render();
}