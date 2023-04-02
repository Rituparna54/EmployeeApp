import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employeeapp';
  result:any;
  constructor(private http:HttpClient)
  {
      this.http.get("http://localhost:5041/api/Employees").subscribe(data=>{console.log(data)} ,
      err=>{console.log("error occured")}
      );
  }
  ngOnInit() {
  }
}
