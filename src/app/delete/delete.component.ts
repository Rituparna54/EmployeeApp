import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Idata} from '../Idata' 
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  id !:number;
  name !: string;
    serviceType !: string;
    address!: string;
  status !: string;
constructor(private http:HttpClient) { }
onSubmit() {
  this.http.delete<Idata>('http://localhost:5041/api/Employees/8')
  .subscribe(() => this.status = 'Delete successful');
}
}
