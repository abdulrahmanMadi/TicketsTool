export class employeeModel {
  employeeId: number;
  employeeName: string;
  contactNo: any;
  emailId: string;
  deptId: number;
  password: string;
  gender: any;
  role: any;

  constructor() {
    this.employeeId = 0;
    this.employeeName = '';
    this.contactNo = '';
    this.emailId = '';
    this.deptId = 0;
    this.password = '';
    this.gender = '';
    this.role = '';
  }
}
