import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
  standalone: true,
})
export class AppUnlessDirective {
  conditionState = input.required<boolean>({ alias: 'appUnless' });

  private tempRef = inject(TemplateRef<HTMLElement>);
  private vcRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (!this.conditionState()) {
        this.vcRef.createEmbeddedView(this.tempRef);
      } else {
        this.vcRef.clear();
      }
    });
  }
}
