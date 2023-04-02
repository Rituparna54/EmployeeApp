import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Idata} from '../Idata' 
@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent {
  id !:number;
  name !: string;
    serviceType !: string;
    address!: string;
constructor(private http:HttpClient) { }
onSubmit()
{
  const formData={
    id:this.id,
    name: this.name,
    serviceType: this.serviceType,
    address: this.address,
  };
  this.http.put<Idata>('http://localhost:5041/api/Employees/8',formData).subscribe({
    next : data => {
      this.id = data.id
    },
      error: error=>{
        console.error('Error saving Data: ',error)
      }
}) ;
}
}
