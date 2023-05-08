"use strict"
let allEmployee = [];
function Employee(EmployeeID, FullName, Department, Level, image) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.image = image;
   // this.Salary = Salary;
    allEmployee.push(this);
}
Employee.prototype.calcSalary = function () {
    let min =0;
    let max =0;
    if(this.Level === 'Senior'){
        min = 1500;
        max = 2000;
    }
    else if (this.Level === 'Mid-Senior'){
        min = 1000;
        max=1500;
    }
    else if(this.Level === 'Junior'){
        min = 500;
        max = 1000;
    }
        
    this.salary = Math.floor(Math.random() * (max - min)) + min;
    return this.salary;
       
}
Employee.prototype.netSalary = function(){

    let netSalary = this.salary - this.salary * (7.5 / 100);
   return netSalary;
     
}
Employee.prototype.render = function () {
    document.write(`the name is :${this.FullName} the salary : ${this.calcSalary()}  jd `)
}


let GhaziSamer = new Employee(1000, 'GhaziSamer', 'Administration', 'Senior','image', '');
let LanaAli = new Employee(1001, 'LanaAli', 'Finance', 'Senior', '', '');
let TamaraAyoub = new Employee(1002, 'TamaraAyoub', 'Marketing', 'Senior', '' ,'');
let SafiWalid = new Employee(1003, 'SafiWalid', '	Administration', 'Mid-Senior', '','');
let OmarZaid = new Employee(1004, 'OmarZaid', 'Development', 'Senior', '' ,'');
let RanaSaleh = new Employee(1005, 'RanaSaleh', 'Development', 'Junior', '','' );
let HadiAhmad = new Employee(1006, 'HadiAhmad', 'Finance', 'Mid-Senior', '','');



for (let i = 0; i < allEmployee.length; i++) {

    allEmployee[i].calcSalary();
    
   
    
   
 
    

    allEmployee[i].render();
}
