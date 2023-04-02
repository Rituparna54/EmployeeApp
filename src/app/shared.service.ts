import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import{Idata} from './Idata'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private httpc:HttpClient) { }
  public getPosts():Observable<Idata[]>
  {
    return this.httpc.get<Idata[]>
    ("http://localhost:5041/api/Employees");
  }
}
