import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductComponent } from './product/product.component';
import { BillingComponent } from './billing/billing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleProductComponent } from './single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductComponent,
    BillingComponent,
    NotFoundComponent,
    SingleProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'product/:id', component: SingleProductComponent }, //should be uptop because it's more specific
      { path: 'product', component: ProductComponent },
      { path: 'billing', component: BillingComponent },
      { path: '**', component: NotFoundComponent }, // ** this represents a wild card, if no url match
    ]),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
