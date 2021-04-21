import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageComponent } from './page/page.component';
import { PlanComponent } from './plan/plan.component';
import { PurchaseService } from './services/purchase.service';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PlanComponent,
    ToolbarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [PurchaseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
