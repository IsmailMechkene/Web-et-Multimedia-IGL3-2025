import { Component, signal } from '@angular/core';
import { Utilisateur } from './components/utilisateur/utilisateur';
import { FormsModule } from '@angular/forms';
import { Profil } from './components/profil/profil';
import { AdresseComponent } from "./components/adresse/adresse";

@Component({
    selector: 'app-root',
    imports: [
    Utilisateur,
    FormsModule,
    Profil,
    AdresseComponent
],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('TP2');

}
