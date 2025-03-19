import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DatePickerModule } from 'primeng/datepicker';
import { FluidModule } from 'primeng/fluid';
import { DatePicker } from 'primeng/datepicker';
import {  RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-prod-nav-list',
  imports: [ButtonModule,FormsModule,CommonModule,MenuModule,DatePickerModule,FluidModule,RouterLink,RouterLinkActive],
  templateUrl: './prod-nav-list.component.html',
  styleUrl: './prod-nav-list.component.scss'
})
export class ProdNavListComponent implements OnInit{
  items: any[]=new Array;
  date: Date | undefined;

  ngOnInit() {
    this.items = [
      { label: 'ALL BREADS', command: () => this.allBreads() },
      { label: 'VEGAN BREADS',  command: () => this.vegBreads() },
      { label: 'SOURDOUGH BREADS',  command: () => this.sourdoughBreads() },
      { label: 'SOURDOUGH HYBRID BREADS',  command: () => this.sourdoughHybridBreads() },
      { label: 'YEAST BREADS',  command: () => this.yeastBreads() },
      { label: 'EGGLESS BREADS',  command: () => this.eggLessBreads() },
      { label: 'TOASTED',  command: () => this.toasted() }

    ];
  }
  
  allBreads() {
    console.log('All Breads');
  }
  
  vegBreads() {
    console.log('Veg Breads');
  }
  sourdoughBreads() {
    console.log('Sourdough breads');
  }
  sourdoughHybridBreads() {
    console.log('Sourdough Hybrid breads');
  }
  yeastBreads() {
    console.log('Yeast breads');
  }
  eggLessBreads() {
    console.log('eggless breads');
  }
  toasted() {
    console.log('toasted breads');
  }
}
