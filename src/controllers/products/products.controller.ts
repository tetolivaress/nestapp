import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = '',
    @Query('offset') offset: string,
  ): string {
    return `products ${limit} ${offset}`;
  }

  @Get('filter')
  getProductFilter(): string {
    return `I am a filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string): string {
    return `product ${productId}`;
  }
}