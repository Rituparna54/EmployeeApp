import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  name !: string;
    serviceType !: string;
    address!: string;
constructor(private http:HttpClient) { }
onSubmit()
{
  const formData={
    name: this.name,
    serviceType: this.serviceType,
    address: this.address,
  };
  this.http.post('http://localhost:5041/api/Employees',formData).subscribe(
    response=>{
      console.error('Data saved successfully : ',response);
    },
    error=>{
      console.error('Error saving Data: ',error)
    }
  ) ;
}
}
