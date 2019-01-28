import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  name:string  
  employees : any[] =[ {
    "employeeId" : 1,
    "employeeName" : "Tuba",
    "projectId":100
  },
  { 
  "employeeId" : 2,
  "employeeName" : "Atul",
  "projectId":101
  },
  { 
    "employeeId" : 3,
    "employeeName" : "Theran",
    "projectId":101
  }
  ]

  information = '';

  onClickInformation() {
    this.information = 'This is a list of employees';
  }


  
}
