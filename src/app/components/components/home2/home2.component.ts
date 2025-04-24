import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  imports: [],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.scss'
})
export class Home2Component implements OnInit{
  ngOnInit(): void {
    alert("Inside Home2")
  }

}
