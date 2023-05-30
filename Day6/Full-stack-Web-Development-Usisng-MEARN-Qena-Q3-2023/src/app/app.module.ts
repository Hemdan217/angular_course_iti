import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainComponent } from './Components/main/main.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductParentComponent } from './Components/product-parent/product-parent.component';
import { ImgStyleDirective } from './Directives/img-style.directive';
import { CalcDiscountPipe } from './Pipes/calc-discount.pipe';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ObservablesAndOperatorsComponent } from './Components/observables-and-operators/observables-and-operators.component';
import { HttpClientModule } from '@angular/common/http';
import { UserTemplateFormComponent } from './Components/User/user-template-form/user-template-form.component';
import { UserReactiveFormComponent } from './Components/User/user-reactive-form/user-reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    ProductsListComponent,
    ProductParentComponent,
    ImgStyleDirective,
    CalcDiscountPipe,
    AboutusComponent,
    NotFoundPageComponent,
    GroupOfRoutesComponent,
    ProductDetailsComponent,
    ObservablesAndOperatorsComponent,
    UserTemplateFormComponent,
    UserReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
