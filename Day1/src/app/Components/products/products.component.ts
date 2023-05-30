import { Component } from '@angular/core';
import { Offer } from 'src/app/Models/icategory';

import { Store } from 'src/app/Models/store';
import { IProduct } from './../../Models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  // 3.	In the product component:
  // a.	 In the Component class, add the following properties:

  // (1)	Property “Discount” of type DiscountOffers Enum. [Bonus]
  Discount: Offer = Offer.offer1;

  // (2)	Object of Store class.
  ourStore: Store = new Store(
    'Mr Robot',
    ['KFS', 'Cairo', 'Egypt'],
    './assets/logo.jpg'
  );

  // (3)	Propery “ClientName” of type string.
  ClientName: string = 'Hemdan';

  // (4)	Object of IProduct interface, and initialize it and add one product.
  newProduct: IProduct = {
    ID: 1240,
    Name: 'LabTop',
    Quantity: 4,
    Price: 40,
    Img: './assets/images/product.jpeg',
    CateogryID: 414,
  };
}
