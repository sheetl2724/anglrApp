import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Community } from '../../model/class/community';
import { Individual } from '../../model/class/individual';
import { Checkbox } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Textarea } from 'primeng/inputtextarea';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-individual',
  imports: [Checkbox,
      DropdownModule,
      InputTextModule,
      CommonModule,
      FormsModule,
      Textarea,
      StyleClassModule,
      RippleModule,
      ButtonModule,
      CalendarModule,ReactiveFormsModule
      ],
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.scss',
})
export class IndividualComponent implements OnInit {
  @Input() errorMsg: string;
    @Input() displayError: boolean;
  individualForm: FormGroup;
  autoResize: boolean = true;
  text: string = '';
  showIcon: boolean = false;
  isIndividual: boolean = true;

  communities: Community[] | undefined;
  individual: Individual = new Individual();
  selectedComunity: string = '';
  selectedType: string = '';
  
  /*firstName:string='';
  lastName:string='';
  mobileNumber:string='';
  
  doorNo:string='';
  apartmentName:string='';
  address:string='';
  pincode:string='';*/
  isAgreed=false;
  ngOnInit(): void {
    this.communities = [
      { name: 'None' },
      { name: 'Adarsh Palm Meadows' },
      { name: 'Adarsh Palm Retreat Villas Phase – 1' },
    ];
  }
  constructor(private fb: FormBuilder) {
    this.individualForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      doorNo: ['', Validators.required],
      apartmentName: ['', Validators.required],
      address: ['', Validators.required],
      pinCode: ['', Validators.required],
      isAgreed: [false, Validators.required],
      selectedComunity: ['', Validators.required]
    });
    this.errorMsg='';
    this.displayError=true;
  }
  get email() {
    return this.individualForm.controls['email'];
  }
  onSave(){
    debugger;
    this.individual.firstName=this.individualForm.value.firstName;
    this.individual.lastName=this.individualForm.value.lastName;
    this.individual.mobileNumber=this.individualForm.value.mobileNumber;
    this.individual.email=this.individualForm.value.email;
    this.individual.doorNo=this.individualForm.value.doorNo;
    this.individual.apartmentName=this.individualForm.value.apartmentName;
    this.individual.address=this.individualForm.value.address;
    this.individual.isAgreed=this.individualForm.value.isAgreed;
    this.individual.pinCode=this.individualForm.value.pincode;
   console.log(this.individual)
  }
  onCheckboxChange() {
    if (this.isAgreed) {
      // Additional actions when checked
      console.log('Checkbox is now true');
      console.log(this.isAgreed);
    }
  }
  isFieldValid(field: string) {
   

    return !this.individualForm.controls[field].valid && this.individualForm.controls[field].touched;
  
}

displayFieldCss(field: string) {

  return {
    'has-error': this.isFieldValid(field),
    'has-feedback': this.isFieldValid(field)
  };
}
}
