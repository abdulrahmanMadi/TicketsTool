import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_Response, LoginModel } from '../Models/APIModel';
import { environment } from '../../../environments/environment.development';
import { Constants } from '../Constant/Const';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient)  { }

  Login(obj:LoginModel):Observable<API_Response>{
    return this.http.post<API_Response>(environment.API_Url + Constants.API_Endpoint.Login,obj);
  }


}
