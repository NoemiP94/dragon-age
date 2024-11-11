import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OriginsComponent } from './components/origins/origins.component';
import { DaIIComponent } from './components/da-ii/da-ii.component';
import { InquisitionComponent } from './components/inquisition/inquisition.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'origins', component: OriginsComponent },
      { path: 'da2', component: DaIIComponent },
      { path: 'inquisition', component: InquisitionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
