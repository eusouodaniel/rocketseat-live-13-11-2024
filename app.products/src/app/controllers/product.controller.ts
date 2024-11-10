import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product.interface';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  list(): Product[] {
    return this.productService.get();
  }
}
