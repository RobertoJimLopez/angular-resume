import { AnchorDirective } from './anchor.directive';
import { ViewContainerRef } from '@angular/core';

describe('AnchorDirective', () => {
  it('should create an instance', () => {
    let viewContainerRef: ViewContainerRef;
    const directive = new AnchorDirective(viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
