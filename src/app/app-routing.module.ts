import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FAQComponent } from './faq/faq.component';
import { FeatureAndBenifitComponent } from './feature-and-benifit/feature-and-benifit.component';
import { ApplicationsComponent } from './applications/applications.component';

const routes: Routes = [ 
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'featureandbenifits', component: FeatureAndBenifitComponent },
  { path: 'applications', component: ApplicationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[AboutComponent]