import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Article {
  titre: string;
  contenu: string;
  importance?: string;
}

@Component({
    selector: 'app-articles',
    imports: [FormsModule, CommonModule],
    templateUrl: './articles.html',
    styleUrl: './articles.css'
})

export class ArticlesComponent {


  articles: Article[] = [];

  newTitle = '';
  newContent = '';
  newImportance = '';

  addArticle() {
    if (this.newTitle && this.newContent) {
      this.articles.push({
        titre: this.newTitle,
        contenu: this.newContent,
        importance: this.newImportance
      });

      this.newTitle = '';
      this.newContent = '';
      this.newImportance = 'moyenne';
    }
  }
}