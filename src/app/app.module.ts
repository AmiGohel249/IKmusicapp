import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Add this line
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './Pages/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ButtonComponent } from './components/button/button.component';
//import { SlideBadComponent } from './components/slide-bad/slide-bad.component';
//import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './Pages/home/home.component';
import { SlideBadComponent } from './components/slide-bad/slide-bad.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { SongComponent } from './components/song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    //ComponentsComponent,
    LoginComponent,
    NavBarComponent,
    ButtonComponent,
   // SideBarComponent,
    //PagesComponent,
    HomeComponent,
    SlideBadComponent,
    SignUpComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
