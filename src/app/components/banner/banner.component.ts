import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-banner',
  imports: [RadioButtonModule,FormsModule,CommonModule,CarouselModule,ButtonModule,CardModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit{
  bannerImg:string='';
  subscription:number=1;
  text1:string='';
  text2:string='';
  text3:string='';
  text4:string='';
  responsiveOptions: any[] | undefined;
  constructor(){
    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
      }
  ]
  }
  ngOnInit(): void {
    this.bannerImg='assets/Content/ClientImages/Seeded-Sourdough-loaf-600x367.jpg'
    this.text1='Premium Quality';
    this.text2='Traditional Baking'
  }
  bannerList:any[]=[
    'assets/Content/ClientImages/Seeded-Sourdough-loaf-600x367.jpg','assets/Content/ClientImages/Banner/Croissant-800x600.jpg','assets/Content/ClientImages/Banner/Focaccia-800x600.jpg','assets/Content/ClientImages/Banner/Ciabatta-400x450.jpg'];


  loadImage(bName:string){

    //debugger
    if(bName==='banner1'){
      this.bannerImg='assets/Content/ClientImages/Seeded-Sourdough-loaf-600x367.jpg';
       this.text1='Premium Quality';
    this.text2='Traditional Baking'

    }else if(bName==='banner2'){
      this.bannerImg='assets/Content/ClientImages/Banner/Croissant-800x600.jpg';
       this.text1='We Make Delicious Breads';
    this.text2='Fresh & Tasty'
    this.text3='Premium Quality'
    this.text4='Original Recipies'

    }else if(bName==='banner3'){
      this.bannerImg='assets/Content/ClientImages/Banner/Focaccia-800x600.jpg';
       this.text1='Premium Quality';
    this.text2='Traditional Baking'

    }else if(bName==='banner4'){
      this.bannerImg='assets/Content/ClientImages/Banner/Ciabatta-400x450.jpg';
       this.text1='Premium Quality';
    this.text2='Traditional Baking'

    }else{

    }
  }
}
