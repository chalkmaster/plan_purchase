import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { Plan } from './plan/plan';

const fakeData: Plan[] = [
  new Plan('plan_starter', 'starter', 'starter features for your business to grow.', 1),
  new Plan('plan_regular', 'regular', 'regular features for your business to grow.', 25),
  new Plan('plan_professional', 'professional', 'professional features for your business to grow.', 75),
  new Plan('plan_ultimate', 'ultimate', 'ultimate features for your business to grow.', 115),
];

const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  { path: 'one', component: PageComponent, data: fakeData.slice(0, 1) },
  { path: 'two', component: PageComponent, data: fakeData.slice(2, 3) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
