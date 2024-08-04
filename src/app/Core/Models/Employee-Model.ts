export class employeeModel {
  employeeId: number;
  employeeName: string;
  contactNo: any;
  email: string;
  departmentId: number;
  password: string;
  gender: any;
  role: any;

  constructor() {
    this.employeeId = 0;
    this.employeeName = '';
    this.contactNo = '';
    this.email = '';
    this.departmentId = 0;
    this.password = '';
    this.gender = '';
    this.role = '';
  }
}
