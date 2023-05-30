import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {

  constructor(private httpclient:HttpClient) { }


  // methods => post , get ,put ,patch ,delete

  // get all products
  getAllProducts():Observable<Iproduct[]>{

    // return this.httpclient.get<Iproduct[]>('http://localhost:3000/products');
    return this.httpclient.get<Iproduct[]>(`${environment.baseAPIURL}/products`);
  }
  getPrdByID(prdID:number):Observable<Iproduct>{
    return this.httpclient.get<Iproduct>(`${environment.baseAPIURL}/products/${prdID}`)
  }

  // search by product material
  searchByMaterial(mat:string):Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${environment.baseAPIURL}/products?Material=${mat}`)
  }
}
