import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OriginsComponent } from './components/origins/origins.component';
import { DaIIComponent } from './components/da-ii/da-ii.component';
import { InquisitionComponent } from './components/inquisition/inquisition.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CharDetailComponent } from './components/char-detail/char-detail.component';
import { BackspacePipe } from './pipes/backspace.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { GoalsComponent } from './components/goals/goals.component';
import { AwakeningComponent } from './components/awakening/awakening.component';
import { DlcComponent } from './components/dlc/dlc.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OriginsComponent,
    DaIIComponent,
    InquisitionComponent,
    WelcomeComponent,
    NotfoundComponent,
    CharDetailComponent,
    BackspacePipe,
    FooterComponent,
    GoalsComponent,
    AwakeningComponent,
    DlcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
