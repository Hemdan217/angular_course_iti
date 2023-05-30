import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  prdID: number = 0;

  //{} => iproduct
  product: Iproduct | undefined = undefined;
  constructor(
    private prdService: ProductsService,
    private activedRoute: ActivatedRoute,
    private router:Router,
    private location:Location
  ) {}
  ngOnInit(): void {
    // convert from string to number
    // parseInt , Number , +var,  var as number
    this.prdID = this.activedRoute.snapshot.paramMap.get('prodID')
      ? Number(this.activedRoute.snapshot.paramMap.get('prodID'))
      : 0;
    //  console.log(this.prdID);

    this.product = this.prdService.getProdByID(this.prdID);

    // console.log(this.product);
    // console.log(this.product?.name);
  }

  backToProducts(){

    this.router.navigate(['Products']);
    // this.location.back();
  }
}
