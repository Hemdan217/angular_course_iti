import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/Models/icategory';

import { Store } from 'src/app/Models/store';
import { IProduct } from './../../Models/iproduct';

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

  get filteredBy(): number {
    return this._filteredBy;
  }
  set filteredBy(value: number) {
    this._filteredBy = value;
    console.log('In setter', value);

    if (value == 4) {
      this.filteredProduct = this.productsList;
    } else {
      this.filteredProduct = this.filterByCategoryID(value);
    }

    console.log(this.filteredProduct);
  }
  filteredProduct: IProduct[] = [];
  // (1)	Property “Discount” of type DiscountOffers Enum. [Bonus]
  Discount: Offer = Offer.offer1;

  // (2)	Object of Store class.
  ourStore: Store = new Store(
    'Mr Robot',
    ['KFS', 'Cairo', 'Egypt'],
    './assets/logo.jpg'
  );

  // (4)	Object of IProduct interface, and initialize it and add one product.
  //   (1)	Propery “ClientName” of type string.
  ClientName: string = 'Hemdan';

  // (2)	Property ProductList which is an array of IProduct, and in in constructor initialize it and add some products in different categories.
  productsList: IProduct[] = [];

  // b.	In the constructor initialize the previous properties with any suitable values.
  constructor() {
    this.productsList = [
      {
        id: 1,
        name: 'Miles Wooden Top Side Table',
        price: 12000,
        quantity: 4,
        Material: 'wood',
        categoryID: 1,
        discount: Offer.offer1,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/162657820-162657820-HC26102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
      },
      {
        id: 5,
        name: 'Trixia 4-Seater Glass Top Dining Table',
        price: 30000,
        quantity: 8,
        discount: Offer.offer1,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
      },
      {
        id: 25,
        name: 'Gasha Marble Top Side Table',
        price: 14000,
        quantity: 10,
        discount: Offer.offer2,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
      },
      {
        id: 7,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 2,
        discount: Offer.offer3,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
      },
      {
        id: 17,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 0,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
      },
      {
        id: 9,
        name: 'Boston Study Chair',
        price: 1000,
        quantity: 10,
        discount: Offer.offer2,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
      },
      {
        id: 10,
        name: 'Coby Extendable TV Unit',
        price: 13000,
        quantity: 0,
        discount: Offer.offer3,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'Wood',
      },
      {
        id: 15,
        name: 'Accent TV Unit',
        price: 36999,
        quantity: 4,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'MDF',
      },
      {
        id: 55,
        name: 'Plymouth TV Unit',
        price: 36999,
        quantity: 3,
        discount: Offer.offer3,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'wood',
      },
    ];
  }

  ngOnInit() {
    this.filteredProduct = this.productsList;
  }

  filterByCategoryID(categoryID: number): IProduct[] {
    return (this.filteredProduct = this.productsList.filter(
      (product) => product.categoryID == categoryID
    ));
  }
  sayThanks(product: IProduct) {
    console.log(product);
    console.log(`Thanks for purchasing from our Store + ${this.ClientName}`);
    product.isPurchased = !product.isPurchased;
    console.log('Clicked');
    this.purchasedBefore = !this.purchasedBefore;
    return product;
  }
  decrease(product: IProduct) {
    product.quantity -= product.quantity;
    return product;
  }
  increase(product: IProduct) {
    product.quantity += product.quantity;
    return product;
  }
}
