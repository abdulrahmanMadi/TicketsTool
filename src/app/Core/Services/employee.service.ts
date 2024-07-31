import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_Response } from '../Models/API_Response-model';
import { environment } from '../../../environments/environment.development';
import { Constants } from '../Constant/Const';
import { Observable } from 'rxjs';
import { LoginModel } from '../Models/Login-Model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient)  { }

  Login(obj:LoginModel):Observable<API_Response>{
    return this.http.post<API_Response>(environment.API_Url + Constants.API_Endpoint.Login,obj);
  }


}
