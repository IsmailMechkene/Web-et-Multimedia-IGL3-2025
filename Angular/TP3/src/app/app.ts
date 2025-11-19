import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bienvenue } from './components/bienvenue/bienvenue';
import { Panier } from './components/panier/panier';
import { Utilisateur } from './components/utilisateur/utilisateur';
import { Produit } from './components/produit/produit';

@Component({
    selector: 'app-root',
    imports: [
        Bienvenue,
        Panier,
        Produit,
        Utilisateur
    ],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('TP3');
}
