import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SplitFormComponent } from './split-form/split-form.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'target', component: SplitFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
