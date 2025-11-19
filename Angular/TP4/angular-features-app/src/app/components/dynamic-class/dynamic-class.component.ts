export class DynamicClassComponent {
  articles = [
    { title: 'Article 1', importance: 'high' },
    { title: 'Article 2', importance: 'medium' },
    { title: 'Article 3', importance: 'low' }
  ];

  getClass(importance: string) {
    return {
      'high-importance': importance === 'high',
      'medium-importance': importance === 'medium',
      'low-importance': importance === 'low'
    };
  }
}