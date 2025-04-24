import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
@Component({
  selector: 'app-about',
  imports: [AvatarModule, CommonModule, Carousel, ButtonModule, Tag],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  isVisible: boolean = false;
  isVisible2: boolean = false;
  blogs: any[] = [
    {image:'assets/Content/ClientImages/Banner/Focaccia-800x600.jpg',
      h31:"<h3> Our <span style=\"color: brown;\">Purpose</span></h3>",
      p1:"<p>Our mission is to provide people with nutritious, world-class bread. We learn from traditions and use modern processes to achieve our goal. Craftsmanship and passion are at the heart of what we do.</p>",
      h32:"<h3> Our <span style=\"color: brown;\">Products</span></h3>",
      p2:"<p>Our products are 100% natural, made using unbleached flour and we do not use any preservatives or bread improvers. We use finest of ingredients and our products are made using traditional authentic recipes with the help of modern process.</p>"
    },
    {image:'assets/Content/ClientImages/ProductLarge/SourdoughLoaf_1920x1280.jpg',
      h31:"<h3>\r\n            Founder of&nbsp;<span style=\"color: brown\">Honoré</span>\r\n          </h3>",
      p1:"<p>Ponnanna MP</p>",
      h32:"<h3> Honoré <span style=\"color: brown;\">The Story</span></h3>",
      p2:"<p>In 2011, I made my first sourdough starter named ‘Maya’ which I still use. 5 years of trial, error and disaster, beginning with baking dinner rolls, then sourdough and I finally had the bread I wanted. I was intrigued by the way sourdough behaved. Its unpredictability was fascinating— flour, water, room temperature— any small change in these elements produced a loaf that was different in taste, texture and aroma. My curiosity grew. I broke down the process into over 100 parameters, dived into the internet to read more, joined groups to learn what I could. I experimented with wild yeast water, using coffee berries, gooseberries and bamboo rice for fermentation. All this while, I was giving bread away free to friends and family. In 2016, I began to take orders, still baking out of my home. My reputation grew by word of mouth—people loved the breads I baked. A couple of pop-up stalls at organized events received an overwhelming response. I continued baking at home. By now I had reached a level of consistency that pleased me, and I began baking commercially in October 2017. After all these years, I feel there is still so much more to learn about the captivating world of sourdough.</p>"}
  ];
  responsiveOptions: any[] | undefined;
  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
  products: any[] = [];
  showDiv() {
    this.isVisible = !this.isVisible;
  }
  showDiv2() {
    this.isVisible2 = !this.isVisible2;
  }
}
