import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { TicketsComponent } from './Pages/tickets/tickets.component';
import { NewTecketsComponent } from './Pages/new-teckets/new-teckets.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'employee', component: EmployeeComponent },
            { path: 'department', component: DepartmentComponent },
            { path: 'tickets', component: TicketsComponent },
            { path: 'new-ticket', component: NewTecketsComponent }
        ]
    }
];
