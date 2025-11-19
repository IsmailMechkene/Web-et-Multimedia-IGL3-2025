import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-produit',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './produit.html',
    styleUrl: './produit.css'
})
export class Produit {

    @Input() nomProduit = 'Produit Exemple';
    @Input() imageUrl = '/assets/default.jpg';
    @Input() prix = 49.99;
    @Input() enStock = true;

    @Output() ajout = new EventEmitter<{ nom: string; prix: number }>();

    afficherAlerte() {
        alert('Produit ajouté au panier');
    }

    ajouterAuPanier() {
        this.ajout.emit({ nom: this.nomProduit, prix: this.prix });
    }

    toggleEnStock() {
        this.enStock = !this.enStock;
    }
}
