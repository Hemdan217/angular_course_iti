import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderComponent } from './Layout/header/header.component';
import { MainComponent } from './Layout/main/main.component';
import { ProductsComponent } from './Components/products/products.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { LandingComponent } from './Components/landing/landing.component';
import { ImgStyleDirective } from './Directives/img-style.directive';
import { ApplyDiscountPipe } from './Pipes/apply-discount.pipe';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ProductsComponent,
    SideMenuComponent,
    ProductsListComponent,
    ProductComponent,
    ProductsParentComponent,
    LandingComponent,
    ImgStyleDirective,
    ApplyDiscountPipe,
    CreditCardPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
