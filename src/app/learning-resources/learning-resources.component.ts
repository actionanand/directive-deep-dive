import { Component } from '@angular/core';

import { SafeLinkDirective } from '../shared/directives/safe-link.directive';

@Component({
  selector: 'app-learning-resources',
  imports: [SafeLinkDirective],
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.scss',
  standalone: true,
})
export class LearningResourcesComponent {}
