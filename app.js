"use strict"
let NameSectionEl = document.getElementById('NameSection');
let DepartmentSectionEl = document.getElementById('DepartmentSection')
let myForm = document.getElementById('employeeForm');
let allEmployee = [];
function Employee(EmployeeID, FullName, Department, image ,Level,  Salary) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.image = image;
    this.Salary = Salary;
    Employee.push(this) ;
}

myForm.addEventListener('submit',handelSubmit);
function handelSubmit(event){
    event.preventDefault();
    let FullName = event.target.fName.value;
    let Department=event.target.Department.value;

    let Level = event.target.level.value;
    let image = event.target.image.value;

let newEmployee = newEmployee(FullName,Department,Level,image);
newEmployee.render();
}


Employee.prototype.calc = function(min,max){

    this.Salary = Math.floor(Math.random() * (min - max +1)) + min;

}
Employee.prototype.render = function () {
    const EmployeeNameEl = document.createElement('h3');
    EmployeeNameEl.textContent = this.FullName;
 
    const imgEl = document.createElement('img');
    imgEl.src = this.image;

    const DepartmentEl = document.createElement('select')
    for (let i = 0; i < this.Department.length; i++) {
        let optionEl = document.createElement('option');
        optionEl.textContent = this.Department[i];
    NameSectionEl.appendChild(imgEl);
    NameSectionEl.appendChild(EmployeeNameEl);
    DepartmentEl.appendChild(optionEl);

}
}
DepartmentSectionEl.appendChild('DepartmentEl');


for (let i = 0; i < allEmployee.length; i++) {
   
    allEmployee[i].calc();
    allEmployee[i].render();
}
