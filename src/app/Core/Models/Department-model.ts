export class DepartmentModel {
  deptId: number;
  deptName: string;
  deptHeadName: string;

  deptHeadEmpId: number;
  createdDate: Date;
  
  constructor() {
    this.deptId = 0;
    this.deptName = '';
    this.deptHeadName = '';
    this.deptHeadEmpId = 0;
    this.createdDate = new Date();
  }
}


