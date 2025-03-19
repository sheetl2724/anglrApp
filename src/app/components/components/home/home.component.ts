import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProdlistComponent } from '../prodlist/prodlist.component';
import { BannerComponent } from "../../banner/banner.component";
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  imports: [LoginComponent, RouterLink, RouterLinkActive, ProdlistComponent, BannerComponent,CarouselModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
