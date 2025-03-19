import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-about',
  imports: [AvatarModule,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isVisible:boolean=false;
  isVisible2:boolean=false;
  showDiv(){
    this.isVisible=!this.isVisible;
  }
  showDiv2(){
    this.isVisible2=!this.isVisible2;
  }
}
