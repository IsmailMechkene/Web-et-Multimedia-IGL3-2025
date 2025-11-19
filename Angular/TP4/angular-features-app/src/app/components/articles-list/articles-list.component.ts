export class ArticlesListComponent {
  articles = [
    { title: 'Article 1', content: 'Content of Article 1' },
    { title: 'Article 2', content: 'Content of Article 2' },
    { title: 'Article 3', content: 'Content of Article 3' }
  ];

  newArticleTitle: string = '';
  newArticleContent: string = '';

  addArticle() {
    if (this.newArticleTitle && this.newArticleContent) {
      this.articles.push({
        title: this.newArticleTitle,
        content: this.newArticleContent
      });
      this.newArticleTitle = '';
      this.newArticleContent = '';
    }
  }
}