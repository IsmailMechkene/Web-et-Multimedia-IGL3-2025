import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class WelcomeComponent {
  inputName: string = '';
  isLoggedIn: boolean = false;
  username: string = '';

  constructor(private router: Router) {}

  toggleLogin() {
    if (!this.isLoggedIn && this.inputName.trim()) {
      this.username = this.inputName;
      this.isLoggedIn = true;
      
      this.router.navigate(['/dashboard']);
    } else {
      this.isLoggedIn = false;
      this.inputName = '';
      this.username = '';
      
      this.router.navigate(['/login']);
    }
  }
}