import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  // productsList: Iproduct[];

  showImage: boolean = true;

  userName: string = 'Ahmed';

  filteredProducts: Iproduct[] = [];
  //  filter
  private _listFilter: string = '';

  // Day3
  // get => as property
  // property decorator
  @Input() get listFilterInChild(): string {
    return this._listFilter;
  }
  set listFilterInChild(value: string) {
    this._listFilter = value;
    // console.log('In setter', value);
    // this.filteredProducts = this.performFilter(value);
    // Day4
    this.filteredProducts = this.prdService.performFilter(value);
    // console.log(this.filteredProducts);
  }

  // Day3
  // event
  // declare => eventName
  @Output() SortedPrdsEvent: EventEmitter<Iproduct[]> = new EventEmitter<
    Iproduct[]
  >();

  //  Date
  todayDate: Date = new Date();

  // Day4
  // inject
  constructor(private prdService:ProductsService,private router:Router) {
    // categoryID
    //1=> tables   , 2=>chairs    ,3=> tv units
    // this.productsList = [
    //   {
    //     id: 1,
    //     name: 'Miles Wooden Top Side Table',
    //     price: 12000,
    //     quantity: 4,
    //     Material: 'wood',
    //     categoryID: 1,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/162657820-162657820-HC26102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //   },
    //   {
    //     id: 5,
    //     name: 'Trixia 4-Seater Glass Top Dining Table',
    //     price: 30000,
    //     quantity: 8,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Metal',
    //   },
    //   {
    //     id: 25,
    //     name: 'Gasha Marble Top Side Table',
    //     price: 14000,
    //     quantity: 10,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Metal',
    //   },
    //   {
    //     id: 7,
    //     name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     quantity: 2,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 17,
    //     name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     quantity: 0,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 9,
    //     name: 'Boston Study Chair',
    //     price: 1000,
    //     quantity: 10,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 10,
    //     name: 'Coby Extendable TV Unit',
    //     price: 13000,
    //     quantity: 0,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'Wood',
    //   },
    //   {
    //     id: 15,
    //     name: 'Accent TV Unit',
    //     price: 36999,
    //     quantity: 4,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'MDF',
    //   },
    //   {
    //     id: 55,
    //     name: 'Plymouth TV Unit',
    //     price: 36999,
    //     quantity: 3,
    //     PrdimgURL:
    //       'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'wood',
    //   },
    // ];
  }
  ngOnInit(): void {
    // this.filteredProducts=Array.from(this.productsList);
    // this.filteredProducts = this.productsList;

    // Day4
    this.filteredProducts=this.prdService.getAllProds();
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  // performFilter(filterBy: string): Iproduct[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.productsList.filter((prd: Iproduct) =>
  //     prd.name.toLocaleLowerCase().includes(filterBy)
  //   );
  // }

  sortPrds() {
    // let sortedProducts = this.productsList.sort((a, b) => {
    //   if (a.name < b.name) {
    //     return -1;
    //   }
    //   if (a.name > b.name) {
    //     return 1;
    //   }
    //   return 0;
    // });
    // console.log(sortedProducts);
    // fire event
    // this.SortedPrdsEvent.emit(sortedProducts);
  }

  // Day4
  prdDetails(prdID:number){

    this.router.navigate(['/productDetails',prdID])
  }
}
