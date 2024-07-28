import { Component } from '@angular/core';
import { API_Response, LoginModel } from '../../Core/Models/APIModel';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../Core/Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginObj: LoginModel = new LoginModel();

  constructor(private emp: EmployeeService ,private router:Router) {}

  OnLogin() {
    this.emp.Login(this.loginObj).subscribe((res: API_Response) => {
      if (res.result) {
        alert('Login successful');
        localStorage.setItem('TicketData', JSON.stringify(res.result));
        this.router.navigateByUrl('/dashboard');
      } else {
        alert('Login failed');
      }
      console.log(res);
    });
  }
}
