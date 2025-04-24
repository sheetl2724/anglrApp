import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { DropdownModule } from 'primeng/dropdown';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { Textarea } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { Customer } from '../../../model/interface/customer';
import { Community } from '../../../model/class/community';

@Component({
  selector: 'app-myaccount',
  imports: [ButtonModule,FormsModule,CommonModule,MenuModule,DatePickerModule,FluidModule,RouterLink,RouterLinkActive,InputTextModule,DropdownModule,Textarea],
  templateUrl: './myaccount.component.html',
  styleUrl: './myaccount.component.scss'
})
export class MyaccountComponent implements OnInit{
  customer: Customer[] | undefined;
  selectedCustomerType:string='';
  communities: Community[] | undefined;
   
ngOnInit(): void {
  this.customer=[{customerType:'Individual'},{customerType:'Community'},{customerType:'Business'}];
  this.communities = [
    { name: 'None' },
    { name: 'Adarsh Palm Meadows' },
    { name: 'Adarsh Palm Retreat Villas Phase – 1' },
  ];
}
  

}
