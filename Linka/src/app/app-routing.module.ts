import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeInvestorComponent } from './Components/home-investor/home-investor.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeYouthComponent } from './Components/home-youth/home-youth.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  // { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
  // { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'home-investor', component: HomeInvestorComponent },
  { path: 'home-youth', component: HomeYouthComponent },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
