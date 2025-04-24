import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { ContactService } from '../../../services/contact.service';
import { Contacts } from '../../../model/class/contacts';

@Component({
  selector: 'app-contact',
  imports: [ButtonModule,StyleClassModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  bannerImg:string="assets/Content/ClientImages/Banner/honore_banner_contact.jpg"
  autoResize:boolean=false;
  submitted=false;
  errorMessage: string = '';
contactForm:FormGroup;
  firstname:string=''
  email:string='';
  phone:string='';
  message:string='';
  lastname:string='';
  contact:Contacts=new Contacts();
    @Input() errorMsg: string;
    @Input() displayError: boolean;
  constructor(private contactService:ContactService,private fb: FormBuilder){

    this.contactForm=this.fb.group({
      userId: [1],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required,Validators.email],
      phone:['',Validators.required],
      message:['',Validators.required]
    })
    this.errorMsg='';
    this.displayError=true;
  }
  iframeSrc: string = '';  // Initially empty

  loadIframe(url: string) {
    alert("inside load frame")
    this.iframeSrc = url;  // Update iframe source dynamically
  }
  get emailId() {
    return this.contactForm.controls['email'];
  }
  onSubmit(){
  debugger
    this.contact.firstName=this.contactForm.get('firstname')?.value
    this.contact.lastName=this.contactForm.get('lastname')?.value
    this.contact.email=this.contactForm.get('email')?.value
    this.contact.phone=this.contactForm.get('phone')?.value
    this.contact.message=this.contactForm.get('message')?.value
    this.submitted = true;
    this.errorMessage = '';
   
      this.contactService.addContacts(this.contact).subscribe((res)=>{
        alert("we will reach you soon")
        this.onReset();
        //console.log(res)
      },(error)=>{
        console.log(error)
      });
   
  }
  onReset(){
    this.contactForm.reset({
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      message:''
    })
  }
}
