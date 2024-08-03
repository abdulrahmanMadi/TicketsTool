export class DepartmentModel {
  deptId: number;
  departmentName: string;
  deptHeadName: string;

  deptHeadEmpId: number;
  createdDate: Date;
  
  constructor() {
    this.deptId = 0;
    this.departmentName = '';
    this.deptHeadName = '';
    this.deptHeadEmpId = 0;
    this.createdDate = new Date();
  }
}


