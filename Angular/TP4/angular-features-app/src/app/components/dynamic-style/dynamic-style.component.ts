export class DynamicStyleComponent {
  products = [
    { name: 'Product A', stock: 10 },
    { name: 'Product B', stock: 0 },
    { name: 'Product C', stock: 5 },
  ];

  getStockStyle(stock: number) {
    return {
      color: stock > 0 ? 'green' : 'red',
      fontWeight: stock > 0 ? 'bold' : 'normal',
    };
  }
}