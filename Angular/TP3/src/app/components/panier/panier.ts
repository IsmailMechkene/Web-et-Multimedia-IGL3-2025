import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-panier',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './panier.html',
    styleUrl: './panier.css'
})
export class Panier {

    items: { nom: string; prix: number }[] = [];

    get total() {
        return this.items.reduce((s, i) => s + i.prix, 0);
    }

    ajouter(item: { nom: string; prix: number }) {
        this.items.push(item);
    }
}
