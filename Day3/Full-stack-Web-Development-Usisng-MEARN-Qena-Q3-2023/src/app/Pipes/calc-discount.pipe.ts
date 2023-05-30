import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount'
})
export class CalcDiscountPipe implements PipeTransform {

  transform(value: number,discountNum:number=20): number {

    // discountNum = 50 ,   value = 200
    let disResult=discountNum/100;// 50/100=.5
    let mulOriginalDisRes=value*disResult;  //200*.5 =100

    let AfterDiscountRes=value-mulOriginalDisRes; //200 - 100 = 100
    return AfterDiscountRes;
  }

}
