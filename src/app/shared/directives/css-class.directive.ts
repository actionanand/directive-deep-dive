import { Directive, effect, input } from '@angular/core';

@Directive({
  selector: '[appCssClass]',
  standalone: true,
  host: {
    '[class]': 'cssClassNames',
  },
})
export class CssClassDirective {
  cssClass = input<string>('protected-content', { alias: 'appCssClass' });
  cssClassNames = 'protected-content';

  constructor() {
    effect(() => {
      if (this.cssClass() === 'protected-content' || this.cssClass() === '') {
        this.cssClassNames = 'protected-content';
      } else {
        this.cssClassNames = 'protected-content ' + this.cssClass();
      }
    });
  }
}
