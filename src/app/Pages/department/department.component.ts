import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../Core/Services/department.service';
import { API_Response } from '../../Core/Models/API_Response-model';
import { DepartmentModel } from '../../Core/Models/Department-model';
import { CommonModule } from '@angular/common';
import { pipe } from 'rxjs';
import { NaPipe } from '../../Shared/pipes/na.pipe';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule,CommonModule,NaPipe],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent implements OnInit {
/**
 *
 */
departmentList: DepartmentModel[] = [];
constructor(private deptService: DepartmentService) {
 
  
}
  ngOnInit(): void {
    this.loadDepartments()
   }

  loadDepartments(): void {
    this.deptService.GetAllDepartment().subscribe((res:API_Response) => {
       this.departmentList = res.data;
    });
  }

}
