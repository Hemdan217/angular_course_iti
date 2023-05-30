import { Injectable } from '@angular/core';
import { IProduct, Offer } from '../Models/iproduct';
@Injectable({
  providedIn: 'root',
})
export class ProductsServicesService {
  //   a.	In the service add these functions (Depending on the classes you created before):
  // i)	getProductsByCatID(catID): Products []
  // ii)	getProductByID(prodID): Product
  productsList: IProduct[] = [];
  Discount: Offer = Offer.offer1;
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
  getAllProducts() {
    return this.productsList;
  }
  searchForProducts(searchKeyword: string): IProduct[] {
    return this.productsList.filter((product) =>
      product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }
  filterByCategoryID(categoryID: number): IProduct[] {
    return this.productsList.filter(
      (product) => product.categoryID == categoryID
    );
  }
  getProductByID(prdID: number): IProduct | undefined {
    return this.productsList.find((prd) => prd.id == prdID);
  }
  sortByPrice(value: string): IProduct[] {
    switch (value) {
      case 'up':
        return this.productsList.sort((a, b) => a.price - b.price);

      case 'down':
        return this.productsList.sort((a, b) => b.price - a.price);

      default:
        return this.productsList;
    }
  }
}
