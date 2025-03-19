import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { Checkbox } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Textarea } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { Business } from '../../model/class/business';

@Component({
  selector: 'app-business',
  imports: [
    Checkbox,
    DropdownModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    Textarea,
    StyleClassModule,
    RippleModule,
    ButtonModule,
    CalendarModule,
    ReactiveFormsModule,
  ],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss',
})
export class BusinessComponent {
  businessForm: FormGroup;
  contactPersonFirstName: string = '';
  contactPersonLastName: string = '';
  establishmentName: string = '';
  establishmentGSTNo: string = '';
  establishmentPhoneNo: string = '';
  mobileNumber: string = '';
  email: string = '';
  doorNo: string = '';
  buildingName: string = '';
  address: string = '';
  pinCode: string = '';
  isAgreed = false;
  business:Business=new Business()

  constructor(private fb: FormBuilder) {
    this.businessForm = this.fb.group({
      contactPersonFirstName: ['', Validators.required],
      contactPersonLastName: ['', Validators.required],
      establishmentName: ['', Validators.required],
      establishmentGSTNo: [''],
      establishmentPhoneNo: [''],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      doorNo: ['', Validators.required],
      buildingName: [''],
      address: ['', Validators.required],
      pinCode: ['', Validators.required],
      isAgreed: [false, Validators.required],
    });
  }
  onSave() {
    debugger
    this.business.contactPersonFirstName=this.businessForm.value.contactPersonFirstName;
    this.business.contactPersonLastName=this.businessForm.value.contactPersonLastName;
    this.business.establishmentName=this.businessForm.value.establishmentName;
    this.business.establishmentGSTNo=this.businessForm.value.establishmentGSTNo;
    this.business.establishmentPhoneNo=this.businessForm.value.establishmentPhoneNo;
    this.business.mobileNumber=this.businessForm.value.mobileNumber;
    this.business.email=this.businessForm.value.email;
    this.business.doorNo=this.businessForm.value.doorNo;
    this.business.buildingName=this.businessForm.value.buildingName;
    this.business.address=this.businessForm.value.address;
    this.business.isAgreed=this.businessForm.value.isAgreed;
    this.business.pinCode=this.businessForm.value.pinCode;
    console.log(this.business)
  }
  onCheckboxChange() {
    if (this.isAgreed) {
      // Additional actions when checked
      console.log('Checkbox is now true');
      console.log(this.isAgreed);
    }
  }
}
