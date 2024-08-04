export class departmentModel {
  deptId: number;
  departmentName: string;
  deptHeadName: string;
  deptHeadEmpIds: number[]; // Array to hold multiple employee IDs
  createdDate: Date;
  
  constructor() {
    this.deptId = 0;
    this.departmentName = '';
    this.deptHeadName = '';
    this.deptHeadEmpIds = [];
    this.createdDate = new Date();
  }
}
