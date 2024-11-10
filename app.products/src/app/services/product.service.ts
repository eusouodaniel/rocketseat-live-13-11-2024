import { Injectable } from '@nestjs/common';
import { Product } from '../interfaces/product.interface';

@Injectable()
export class ProductService {
  get(): Product[] {
    return [
      { name: 'Produto 1', description: 'Produto 1 descrição' },
      { name: 'Produto 2', description: 'Produto 2 descrição' },
    ];
  }
}
