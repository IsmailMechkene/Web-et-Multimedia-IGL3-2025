export class ConditionalDisplayComponent {
  isLoggedIn: boolean = false;

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}