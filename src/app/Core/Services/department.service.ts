import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { constants } from 'buffer';
import { Constants } from '../Constant/Const';
import { Observable } from 'rxjs';
import { API_Response } from '../Models/API_Response-model';
import { DepartmentModel } from '../Models/Department-model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  GetAllDepartment():Observable<API_Response>{
    return this.http.get<API_Response>(environment.API_Url + Constants.API_Endpoint.Get_Department);
  }

 CreateDepartment(obj:DepartmentModel):Observable<API_Response>{
    return this.http.post<API_Response>(environment.API_Url + Constants.API_Endpoint.Create_Department,obj);
  }

  UpdateDepartment(obj:DepartmentModel):Observable<API_Response>{
    return this.http.put<API_Response>(environment.API_Url + Constants.API_Endpoint.Update_Department,obj);
  }

  DeleteDepartment(id:number):Observable<API_Response>{
    return this.http.delete<API_Response>(environment.API_Url + Constants.API_Endpoint.Delete_Department+id);
  }
}
