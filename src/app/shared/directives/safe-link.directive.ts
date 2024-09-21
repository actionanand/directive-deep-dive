import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input.required<string>({ alias: 'appSafeLink' });

  private hostEl = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  onConfirmLeavePage(event: MouseEvent) {
    // accessing host element via ElementRef
    const url = this.hostEl.nativeElement.href;
    console.log(url);

    const wantsToLeave = window.confirm('Do you want to leave the page?');

    if (wantsToLeave) {
      // accessing host element via event.target
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
      return;
    }

    event.preventDefault();
  }
}
