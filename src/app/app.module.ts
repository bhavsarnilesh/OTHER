import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from  '@angular/material/Toolbar';
import { MatSidenavModule} from  '@angular/material/Sidenav';
import { MatListModule} from  '@angular/material/List';
import { MatButtonModule} from  '@angular/material/Button';
import { MatIconModule} from  '@angular/material/Icon';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FAQComponent } from './faq/faq.component';
import { FeatureAndBenifitComponent } from './feature-and-benifit/feature-and-benifit.component';
import { ApplicationsComponent } from './applications/applications.component';
import { AvatarModule } from 'ngx-avatar';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    routingComponents,
    HomeComponent,
    FAQComponent,
    FeatureAndBenifitComponent,
    ApplicationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    AvatarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
