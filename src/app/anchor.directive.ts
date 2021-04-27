import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[anchorHost]'
})
export class AnchorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
