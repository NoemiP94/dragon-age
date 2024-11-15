import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OriginsComponent } from './components/origins/origins.component';
import { DaIIComponent } from './components/da-ii/da-ii.component';
import { InquisitionComponent } from './components/inquisition/inquisition.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatCardModule } from '@angular/material/card';
import { NotfoundComponent } from './components/notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OriginsComponent,
    DaIIComponent,
    InquisitionComponent,
    WelcomeComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatCardModule],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
