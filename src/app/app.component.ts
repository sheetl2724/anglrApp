import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/components/login/login.component';
import { HomeComponent } from './components/components/home/home.component';
import { FooterComponent } from "./components/footer/footer.component";
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FooterComponent,ButtonModule,MenubarModule,SidebarModule,MenuModule,TieredMenuModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'honoreApp';
  //hideOnOutsideClick:boolean=true;
  menuVisible: boolean = false;
  menuItems: any[] = [];
  ngOnInit(): void {
    this.menuItems=[{ label: 'My Account', icon: 'pi pi-sign-in', routerLink: ['/myaccount'] },{ label: 'Login', icon: 'pi pi-sign-in', routerLink: ['/login'] },
    {label: 'Home', icon: 'pi pi-home', routerLink: ['/home'] },
    { label: 'About', icon: 'pi pi-info-circle', routerLink: ['/about'] },
    { label: 'Contact', icon: 'pi pi-envelope', routerLink: ['/contact'] } ];
  }
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
