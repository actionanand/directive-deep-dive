import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  // input signal
  // email = signal('');
  password = signal('');

  // model signal
  credential = model.required<{ email: string; password: string }>();

  private authService = inject(AuthService);

  onSubmit() {
    this.authService.authenticate(this.credential().email, this.password());

    this.credential.set({ email: this.credential().email, password: this.password() });
  }
}
