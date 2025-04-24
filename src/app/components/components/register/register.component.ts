import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

import { Textarea } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { CalendarModule } from 'primeng/calendar';
import { RadioButton } from 'primeng/radiobutton';
import { Community } from '../../../model/class/community';
import { Individual } from '../../../model/class/individual';
import { IndividualComponent } from '../../individual/individual.component';
import { BusinessComponent } from '../../business/business.component';
import { CommunityComponent } from "../../community/community.component";

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-register',
  imports: [
    DropdownModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    Textarea,
    StyleClassModule,
    RippleModule,
    ButtonModule,
    CalendarModule,
    RadioButton, IndividualComponent, BusinessComponent,
    CommunityComponent
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  autoResize: boolean = true;
  text: string = '';
  showIcon: boolean = false;
  isBusiness: boolean = false;
  isIndividual: boolean = true;
  cities: City[] | undefined;
  communities: Community[] | undefined;
  individual: Individual = new Individual();
  selectedComunity:string='';
  
  selectedType: string = '';

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.selectedType = 'Community';
   
  
  }

  constructor() {
   
    
  }
  
}

