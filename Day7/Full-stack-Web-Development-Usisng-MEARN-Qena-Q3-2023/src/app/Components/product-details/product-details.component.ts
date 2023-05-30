import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';
import { ProductsWithApiService } from 'src/app/Services/products-with-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  prdID: number = 0;

  //{} => iproduct
  product: Iproduct | undefined = undefined;

  // Day5
  prdsAfterSearch: Iproduct[] = [];

  // Day7

  productsIDS: number[] = [];
  currentPrdIndex: number = 0;
  constructor(
    private prdService: ProductsService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private prdAPIService: ProductsWithApiService
  ) {}
  ngOnInit(): void {
    // convert from string to number
    // parseInt , Number , +var,  var as number
    // this.prdID = this.activedRoute.snapshot.paramMap.get('prodID')
    //   ? Number(this.activedRoute.snapshot.paramMap.get('prodID'))
    //   : 0;
    //  console.log(this.prdID);

    // this.product = this.prdService.getProdByID(this.prdID);

    // console.log(this.product);
    // console.log(this.product?.name);

    // Day5
    // this.prdAPIService.getPrdByID(this.prdID).subscribe(data=>{
    //   this.product=data;
    //   // console.log(this.product);

    // })

    // Day7
    this.productsIDS = this.prdService.getProductsByIDS();
    console.log(this.productsIDS);

    this.activedRoute.paramMap.subscribe((paramMap) => {
      this.prdID = paramMap.get('prodID') ? Number(paramMap.get('prodID')) : 0;
      let prd = this.prdService.getProdByID(this.prdID);
      if (prd) {
        this.product = prd;
      } else {
        alert('product is not found');
        this.location.back();
      }
    });
  }

  backToProducts() {
    this.router.navigate(['Products']);
    // this.location.back();
  }

  // Day5
  searchPrdWithMaterail(search: string) {
    this.prdAPIService.searchByMaterial(search).subscribe((data) => {
      this.prdsAfterSearch = data;
    });
  }

  // Day7
  previousFunc() {
    this.currentPrdIndex = this.productsIDS.indexOf(this.prdID);
    //  console.log(this.currentPrdIndex);
    this.router.navigate([
      '/productDetails',
      this.productsIDS[--this.currentPrdIndex],
    ]);
  }
  nextFunc() {
    this.currentPrdIndex = this.productsIDS.indexOf(this.prdID);
    //  console.log(this.currentPrdIndex);
    this.router.navigate([
      '/productDetails',
      this.productsIDS[++this.currentPrdIndex],
    ]);
  }
}
