import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Offer } from 'src/app/Models/icategory';

import { IProduct } from './../../Models/iproduct';
import { ProductsServicesService } from '../../Services/products-services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // 3.	In the product component:
  // a.	 In the Component class, add the following properties:
  purchasedBefore: boolean = false;
  _filteredBy: number = 0;
  @Input() get filteredBy(): number {
    return this._filteredBy;
  }
  set filteredBy(value: number) {
    this._filteredBy = value;
    console.log('In setter', value);

    if (value == 4) {
      this.filteredProduct = this.productsList;
    } else {
      this.filteredProduct = this.productsService.filterByCategoryID(value);
    }

    console.log(this.filteredProduct);
  }

  _sortBy: string = '';
  @Input() get sortBy(): string {
    return this._sortBy;
  }
  set sortBy(value: string) {
    this._sortBy = value;
    console.log('In setter', value);

    this.filteredProduct = this.productsService.sortByPrice(value);
  }

  _prodId: number = 0;

  @Input() get prodId(): number {
    return this._prodId;
  }
  set prodId(value: number) {
    this._prodId = value;
    console.log('In setter', value);

    console.log();
    this.filteredProduct[
      this.filteredProduct.findIndex((item) => item.id == value)
    ].isPurchased = false;
  }

  _search: string = '';
  @Input() get search(): string {
    return this._search;
  }
  set search(value: string) {
    this._search = value;
    console.log('In setter', value);

    this.filteredProduct = this.productsService.searchForProducts(value);

    console.log(this.filteredProduct);
  }

  filteredProduct: IProduct[] = [];
  // (1)	Property “Discount” of type DiscountOffers Enum. [Bonus]
  Discount: Offer = Offer.offer1;

  // (4)	Object of IProduct interface, and initialize it and add one product.
  //   (1)	Propery “ClientName” of type string.
  ClientName: string = 'Hemdan';

  // (2)	Property ProductList which is an array of IProduct, and in in constructor initialize it and add some products in different categories.
  productsList: IProduct[] = [];

  // b.	In the constructor initialize the previous properties with any suitable values.

  @Output() CartProducts: EventEmitter<IProduct[]> = new EventEmitter<
    IProduct[]
  >();
  constructor(private productsService: ProductsServicesService) {
    this.productsList = this.productsService.getAllProducts();
  }

  ngOnInit() {
    this.filteredProduct = this.productsList;
  }

  sayThanks(product: IProduct) {
    console.log(product);
    console.log(`Thanks for purchasing from our Store + ${this.ClientName}`);
    product.isPurchased = !product.isPurchased;
    this.CartProducts.emit(
      this.filteredProduct.filter((item) => item.isPurchased && item.quantity)
    );
    console.log('Clicked');
    this.purchasedBefore = this.filteredProduct.some(
      (item) => item.isPurchased
    );

    return product;
  }
  decrease(product: IProduct) {
    product.quantity = product.quantity == 0 ? 0 : --product.quantity;
    return product;
  }
  increase(product: IProduct) {
    product.quantity += 1;
    return product;
  }
}
