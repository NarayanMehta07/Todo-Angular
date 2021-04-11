import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
data : any;
  constructor(private user:UsersService) {
    this.user.getdata().subscribe(data=>{
      this.data = data ;
      console.log(this.data)
    })
   }

  ngOnInit(): void {
  }

}
