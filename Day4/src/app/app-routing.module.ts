import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { LandingComponent } from './Components/landing/landing.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';

// a.	add the following links and components:

const routes: Routes = [
  // v)	Default route, when user writes no route, redirects to /home route

  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  // i)	Home (static page with any data)
  { path: 'Home', component: LandingComponent, title: 'Home page' },
  // iv)	Products (that opens Shopping cart component).
  {
    path: 'Products',
    component: ProductsParentComponent,
    title: 'Products page',
  },

  // ii)	About us (static page with any data)
  // iii)	Contact us (static page with any data)
  { path: 'AboutUs', component: SideMenuComponent, title: 'About Us page' },

  // parameter
  {
    path: 'productDetails/:prodID',
    component: ProductComponent,
    title: 'Product Details page',
  },
  // vi)	A Component to handle any wrong routes that when user writes a route that isn’t exist (Wildcard route).

  // 404 not found
  { path: '**', component: NotFoundPageComponent, title: '404 Page not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
