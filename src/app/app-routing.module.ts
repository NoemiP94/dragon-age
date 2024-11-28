import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OriginsComponent } from './components/origins/origins.component';
import { DaIIComponent } from './components/da-ii/da-ii.component';
import { InquisitionComponent } from './components/inquisition/inquisition.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CharDetailComponent } from './components/char-detail/char-detail.component';
import { GoalsComponent } from './components/goals/goals.component';
import { AwakeningComponent } from './components/awakening/awakening.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'origins', component: OriginsComponent },
      { path: 'detail/:id', component: CharDetailComponent },
      { path: 'awakening', component: AwakeningComponent },
      { path: 'da2', component: DaIIComponent },
      { path: 'inquisition', component: InquisitionComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'goal/:id', component: GoalsComponent },
    ],
  },
  { path: 'detail/:id', component: CharDetailComponent },
  { path: '404', component: NotfoundComponent },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
