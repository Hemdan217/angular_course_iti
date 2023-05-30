import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ImgStyle]',
})
export class ImgStyleDirective implements OnChanges {
  // property

  @Input() radius1: string = '50px';
  @Input('ImgStyle') radius2: string = '10px';
  // document.getElement   .style.
  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.borderRadius = '30px';
  }
  ngOnChanges(): void {
    this.element.nativeElement.style.borderRadius = `${this.radius2}`;

  }

  // method decorator
  @HostListener('mouseover') func1() {
    this.element.nativeElement.style.borderRadius = `${this.radius1}`;
    this.element.nativeElement.style.opacity = ".7";
  }
  @HostListener('mouseout') func2() {
    this.element.nativeElement.style.borderRadius = `${this.radius2}`;
    this.element.nativeElement.style.opacity = "1";

  }
}
