import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PlanComponent } from './plan/plan.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PlanComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
