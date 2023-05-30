import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ActivatedRoute } from '@angular/router';
import { ProductsServicesService } from '../../Services/products-services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product: IProduct | undefined;
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsServicesService
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('prodID')
      ? Number(this.route.snapshot.paramMap.get('prodID'))
      : 0;
    this.product = this.productsService.getProductByID(this.id);
  }
}
