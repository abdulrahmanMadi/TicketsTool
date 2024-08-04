import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../Core/Services/employee.service';
import { API_Response } from '../../Core/Models/API_Response-model';
import { employeeModel } from '../../Core/Models/Employee-Model';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { departmentModel } from '../../Core/Models/Department-model';
import { DepartmentService } from '../../Core/Services/department.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeList: employeeModel[] = [];
  departmentList: departmentModel[] = [];
  employeeObj: employeeModel = new employeeModel();
  showForm: boolean = false;
  isEdit: boolean = false;
  dialogRef: MatDialogRef<any> | undefined;

  @ViewChild('employeeDialog') employeeDialog!: TemplateRef<any>;

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
    this.loadDepartments();
  }

  loadEmployees(): void {
    this.employeeService.GetAllEmployees().subscribe((res: API_Response) => {
      this.employeeList = res.data;
    });
  }

  loadDepartments(): void {
    this.departmentService.GetAllDepartment().subscribe((res: API_Response) => {
      this.departmentList = res.data;
      console.log('Loaded departments:', this.departmentList);
    });
  }

  getDepartmentName(deptId: number): string {
    console.log('deptId:', deptId);
    const department = this.departmentList.find(dep => dep.deptId === deptId);
    console.log('Found department:', department);
    return department ? department.departmentName : 'Unknown Department';
  }

  onCreate(): void {
    this.showForm = true;
    this.isEdit = false;
    this.employeeObj = new employeeModel();
    this.dialogRef = this.dialog.open(this.employeeDialog);
  }

  onEdit(employee: employeeModel): void {
    this.showForm = true;
    this.isEdit = true;
    this.employeeObj = { ...employee };
    this.dialogRef = this.dialog.open(this.employeeDialog);
  }

  onSave(): void {
    this.employeeService.CreateEmployee(this.employeeObj).subscribe((res: API_Response) => {
      if (res.result) {
        alert('Employee created successfully');
        this.loadEmployees();
        this.onClose();
      } else {
        alert(res.message);
      }
    });
  }

  onUpdate(): void {
    this.employeeService.UpdateEmployee(this.employeeObj).subscribe((res: API_Response) => {
      if (res.result) {
        alert('Employee updated successfully');
        this.loadEmployees();
        this.onClose();
      } else {
        alert(res.message);
      }
    });
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.DeleteEmployee(id).subscribe((res: API_Response) => {
        if (res.result) {
          alert('Employee deleted successfully');
          this.loadEmployees();
        } else {
          alert(res.message);
        }
      });
    }
  }

  onClose(): void {
    this.showForm = false;
    this.dialogRef?.close();
  }
}
