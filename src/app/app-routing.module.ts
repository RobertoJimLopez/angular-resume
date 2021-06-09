import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';

const routes : Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '',
    component: HomeComponent
  }
]

RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
