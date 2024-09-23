import { Component, computed, inject, OnInit } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './services/auth.service';
import { css } from './shared/constatnts/css.constants';
import { AuthDirective } from './shared/directives/auth.directive';
import { CssClassDirective } from './shared/directives/css-class.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [AuthComponent, LearningResourcesComponent, AuthDirective, CssClassDirective],
})
export class AppComponent implements OnInit {
  private authServ = inject(AuthService);

  isAdmin = computed(() => this.authServ.activePermission() === 'admin');

  myCredentials = {
    email: 'test@ar.com',
    password: '',
  };

  listenToModelSignalChange(credential: { email: string; password: string }) {
    console.log('credential using model signal');
    console.log('Email: ' + credential.email + ' | ' + 'Password: ' + credential.password);
  }

  ngOnInit() {
    console.log('%cLogin %s', css, ' Credentials!');
    console.log(
      '%cEmail: %cadmin@ar.com %cand %cPassword: %cadmin',
      'color: black',
      'color: green',
      'color: black',
      'color: black',
      'color: red',
    );
    console.log(
      '%cEmail: %cuser@ar.com %cand %cPassword: %cuser',
      'color: black',
      'color: green',
      'color: black',
      'color: black',
      'color: red',
    );
    console.log(
      '%cAny other %cEmail and Password %cwill give %cguest %caccess only',
      'color: black',
      'color: green',
      'color: black',
      'color: red',
      'color: black',
    );
  }
}
