import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Utilisateur } from './utilisateur/utilisateur';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Utilisateur
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP2');
}
