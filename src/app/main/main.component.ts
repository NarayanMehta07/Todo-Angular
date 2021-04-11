import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data : any;

  constructor() {

  this.data = [
      {
      name:"Narayan Mehta",
      address:"Jamshedpur",
      dob:"25-01-1992"
    },
    {
      name:"Rajat",
      address:"Ranchi",
      dob:"15-71-1992"
    },
    {
      name:"Mehta Javardhan",
      address:"Dhanbad",
      dob:"25-01-1999"
    }
  ]
  console.log(this.data)
   }

  ngOnInit(): void {
  }

  onClick(){
    console.log("Button has been clicked!")
  }

}
