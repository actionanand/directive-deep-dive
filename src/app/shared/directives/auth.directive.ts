import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';

import { Permission } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });

  private authServ = inject(AuthService);
  private viewContainerRef = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef);

  constructor() {
    effect(() => {
      if (this.authServ.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
