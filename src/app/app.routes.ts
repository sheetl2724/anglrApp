import { Routes } from '@angular/router';
import { LoginComponent } from './components/components/login/login.component';
import { HomeComponent } from './components/components/home/home.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/components/contact/contact.component';
import { AboutComponent } from './components/components/about/about.component';
import { ProdlistComponent } from './components/components/prodlist/prodlist.component';
import { Component } from '@angular/core';
import { ProddetailsComponent } from './components/components/proddetails/proddetails.component';
import { RegisterComponent } from './components/components/register/register.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProdNavListComponent } from './components/components/prod-nav-list/prod-nav-list.component';
import { Home2Component } from './components/components/home2/home2.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
  {
    path: '',

    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    
  },
  {
    path: 'home2',
    component: Home2Component,
  },
    {
    path: 'banner',
    component: BannerComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'prodlist',
    component: ProdlistComponent,
  },
  {
    path: 'proddetails',
    component: ProddetailsComponent,
  },
  {
    path: 'prodnavlist',
    component: ProdNavListComponent,
  },
  {
    path: 'app',
    component: AppComponent,
  },
  {
    path:'footer',
    component:FooterComponent
  }
];
