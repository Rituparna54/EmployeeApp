import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import{Idata} from '../Idata';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {
  public response :Observable<Idata[]>;
  constructor(public service :SharedService){
    this.response=this.service.getPosts();
    console.log(this.response)
  }
}
