import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentService } from '../../Core/Services/department.service';
import { API_Response } from '../../Core/Models/API_Response-model';
import { departmentModel } from '../../Core/Models/Department-model';
import { CommonModule } from '@angular/common';
import { NaPipe } from '../../Shared/pipes/na.pipe';
import { EmployeeService } from '../../Core/Services/employee.service';
import { Observable } from 'rxjs';
import { employeeModel } from '../../Core/Models/Employee-Model';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NaPipe,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  departmentList: departmentModel[] = [];
  departmentObj: departmentModel = new departmentModel();
  employee$: Observable<employeeModel[]> | undefined;

  constructor(private deptService: DepartmentService, private employeeService: EmployeeService) {
    this.employee$ = this.employeeService.GetListEmployees();
  }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.deptService.GetAllDepartment().subscribe((res: API_Response) => {
      this.departmentList = res.data;
    });
  }

  OnSave(): void {
    this.deptService.CreateDepartment(this.departmentObj).subscribe((res: API_Response) => {
      if (res.result) {
        alert('Department added successfully');
        this.loadDepartments();
        this.departmentObj = new departmentModel();
      } else {
        alert(res.message);
      }
    });
  }

  OnEdit(item: departmentModel): void {
    this.departmentObj = { ...item }; // Spread operator to avoid direct object reference
    // Load employees for the selected department
    this.deptService.GetEmployeesByDepartment(this.departmentObj.deptId).subscribe((res: API_Response) => {
      if (res.result) {
        this.departmentObj.deptHeadEmpIds = res.data.map((emp: employeeModel) => emp.employeeId);
      } else {
        alert(res.message);
      }
    });
  }

  OnUpdate(): void {
    this.deptService.UpdateDepartment(this.departmentObj).subscribe((res: API_Response) => {
      if (res.result) {
        alert('Department Updated successfully');
        this.loadDepartments();
        this.departmentObj = new departmentModel();
      } else {
        alert(res.message);
      }
    });
  }

  OnRest(): void {
    this.departmentObj = new departmentModel();
  }

  OnDelete(id: number): void {
    if (confirm('Are you sure you want to delete this department?')) {
      this.deptService.DeleteDepartment(id).subscribe((res: API_Response) => {
        if (res.result) {
          alert('Department deleted successfully');
          this.loadDepartments();
        } else {
          alert(res.message);
        }
      });
    }
  }
}
