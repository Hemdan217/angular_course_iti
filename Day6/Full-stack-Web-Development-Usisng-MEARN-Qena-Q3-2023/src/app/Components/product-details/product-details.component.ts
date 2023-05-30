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
  prdsAfterSearch:Iproduct[]=[];
  constructor(
    private prdService: ProductsService,
    private activedRoute: ActivatedRoute,
    private router:Router,
    private location:Location,
    private prdAPIService:ProductsWithApiService
  ) {}
  ngOnInit(): void {
    // convert from string to number
    // parseInt , Number , +var,  var as number
    this.prdID = this.activedRoute.snapshot.paramMap.get('prodID')
      ? Number(this.activedRoute.snapshot.paramMap.get('prodID'))
      : 0;
    //  console.log(this.prdID);

    // this.product = this.prdService.getProdByID(this.prdID);

    // console.log(this.product);
    // console.log(this.product?.name);

    // Day5
    this.prdAPIService.getPrdByID(this.prdID).subscribe(data=>{
      this.product=data;
      console.log(this.product);

    })
  }

  backToProducts(){

    this.router.navigate(['Products']);
    // this.location.back();
  }

  // Day5
  searchPrdWithMaterail(search:string){
    this.prdAPIService.searchByMaterial(search).subscribe(data=>{

      this.prdsAfterSearch=data;
    })
  }
}
