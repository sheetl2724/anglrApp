import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { Checkbox } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Textarea } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { Community } from '../../model/class/community';

@Component({
  selector: 'app-community',
  imports: [Checkbox,
        DropdownModule,
        InputTextModule,
        CommonModule,
        FormsModule,
        Textarea,
        StyleClassModule,
        RippleModule,
        ButtonModule,
        CalendarModule,ReactiveFormsModule,AutoCompleteModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent implements OnInit{
 communityForm: FormGroup;
 isAgreed=false;
 communities: Community[] | undefined;
 selectedComunity: string = '';
  selectedType: string = '';
 ngOnInit(): void {
  this.communities = [
    { name: 'None' },
    { name: 'Adarsh Palm Meadows' },
    { name: 'Adarsh Palm Retreat Villas Phase – 1' },
  ];
  this.communityForm.get('selectedComunity')?.setValue(this.communities[0]);
 }
 constructor(private fb:FormBuilder){
  this.communityForm=  this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        mobileNumber: ['', Validators.required],
        doorNo: ['', Validators.required],
        apartmentName: ['', Validators.required],
        address: ['', Validators.required],
        pinCode: ['', Validators.required],
        isAgreed: [false, Validators.required],
        //selectedComunity: [this.communities]
        //selectedComunity: [this.communities]
 })
}
 get email() {
  return this.communityForm.controls['email'];
}
 onSave(){

}
onCheckboxChange() {
  if (this.isAgreed) {
    // Additional actions when checked
    console.log('Checkbox is now true');
    console.log(this.isAgreed);
  }
}
isFieldValid(field: string) {
 

  return !this.communityForm.controls[field].valid && this.communityForm.controls[field].touched;

}

displayFieldCss(field: string) {

return {
  'has-error': this.isFieldValid(field),
  'has-feedback': this.isFieldValid(field)
};
}
}