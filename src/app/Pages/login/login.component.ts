import { Component } from '@angular/core';
import { API_Response } from '../../Core/Models/API_Response-model';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../Core/Services/employee.service';
import { Router } from '@angular/router';
import { LoginModel } from '../../Core/Models/Login-Model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], // Corrected 'styleUrl' to 'styleUrls'
})
export class LoginComponent {
  loginObj: LoginModel = new LoginModel();

  constructor(private emp: EmployeeService, private router: Router) {}

  OnLogin() {
    this.emp.Login(this.loginObj).subscribe((res: API_Response) => {
      if (res.result) {
        alert('Login successful');
        
        // Check if localStorage is available
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('TicketData', JSON.stringify(res.data));
        } else {
          console.warn('localStorage is not available');
        }
        
        this.router.navigateByUrl('/dashboard');
      } else {
        alert('Login failed');
      }
      console.log(res);
    });
  }
}
