import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCartComponent } from './user-cart/user-cart.component';
import { TrackOrdersComponent } from './track-orders/track-orders.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  // default path
  {path:'',component:UserCartComponent},
  {path: 'userCart', component: UserCartComponent,title:"User cart"},
  {path: 'trackOrder', component: TrackOrdersComponent,title:"User Track Order"},
]


@NgModule({
  declarations: [
    UserCartComponent,
    TrackOrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserOrdersModule { }
