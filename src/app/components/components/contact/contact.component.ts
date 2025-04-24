import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-contact',
  imports: [ButtonModule,StyleClassModule,CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  bannerImg:string="assets/Content/ClientImages/Banner/honore_banner_contact.jpg"
  autoResize:boolean=false;

  firstname:string;
  email:string;
  phone:string;
  message:string;
  lastname:string;
  constructor(){
    this.firstname='';
    this.email='';
    this.message='';
    this.phone='';
    this.lastname='';
  }
  iframeSrc: string = '';  // Initially empty

  loadIframe(url: string) {
    alert("inside load frame")
    this.iframeSrc = url;  // Update iframe source dynamically
  }
}
