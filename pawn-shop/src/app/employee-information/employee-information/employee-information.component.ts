import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee/employee";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent implements OnInit {
  employeeDetail: Employee = {};
  imgLoad: any = '';

  constructor(private employeeService: EmployeeService) {
  }

  getInfoEmployee(user: string) {
    this.employeeService.findByUser(user).subscribe(next => {
      console.log(this.employeeDetail);
      this.employeeDetail = next;
      this.imgLoad = this.employeeDetail.imgUrl;
      console.log(this.imgLoad);
    });
  }

  ngOnInit(): void {
    this.getInfoEmployee("user2")
  }
}
