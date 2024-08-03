import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../Core/Services/department.service';
import { API_Response } from '../../Core/Models/API_Response-model';
import { DepartmentModel } from '../../Core/Models/Department-model';
import { CommonModule } from '@angular/common';
import { NaPipe } from '../../Shared/pipes/na.pipe';
import { EmployeeService } from '../../Core/Services/employee.service';
import { Observable } from 'rxjs';
import { employeeModel } from '../../Core/Models/Employee-Model';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule, CommonModule, NaPipe],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss',
})
export class DepartmentComponent implements OnInit {
  /**
   *
   */
  departmentList: DepartmentModel[] = [];
  departmentObj: DepartmentModel = new DepartmentModel();

  employee$: Observable<employeeModel[]> | undefined;


  constructor( private deptService: DepartmentService,private EmployeeService: EmployeeService)
   {
    this.employee$=this.EmployeeService.GetListEmployees();

  }
  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.deptService.GetAllDepartment().subscribe((res: API_Response) => {
      this.departmentList = res.data;
    });
  }
  loadEmployee(): void {
    this.EmployeeService.GetAllEmployees().subscribe(
      (res: API_Response) => {
        this.departmentList = res.data;
      }
    );
  }
OnSave(): void {
  this.deptService.CreateDepartment(this.departmentObj).subscribe((res: API_Response) => {
    if (res.result) {
      alert('Department added successfully');
      this.loadDepartments();
      this.departmentObj = new DepartmentModel();
    }else {
      alert(res.message);
    }
  });
}


OnEdit(item:DepartmentModel): void {
  this.departmentObj =item;
}

OnUpdate(){
  this.deptService.UpdateDepartment(this.departmentObj).subscribe((res: API_Response) => {
    if (res.result) {
      alert('Department Updated successfully');
      this.loadDepartments();
      this.departmentObj = new DepartmentModel();
    }else {
      alert(res.message);
    }
  });
}
OnRest(){
  this.departmentObj = new DepartmentModel();
}

OnDelete(id: number){
  if(confirm('Are you sure you want to delete this department?')){
    this.deptService.DeleteDepartment(id).subscribe((res: API_Response) => {
      if (res.result) {
        alert('Department deleted successfully');
        this.loadDepartments();
      }else {
       
        alert(res.message);
      }
    });
  }
}
}
