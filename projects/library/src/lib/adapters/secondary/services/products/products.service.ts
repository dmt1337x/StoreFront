import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDTO } from '../../../../application/ports/secondary/dto/product.dto';
import { ProductsDtoPort } from '../../../../application/ports/secondary/dto/products.dto-port';

@Injectable()
export class ProductsService implements ProductsDtoPort {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<ProductDTO[]> {
    return this._httpClient.get<ProductDTO[]>(
      `https://6384fca14ce192ac60696c4b.mockapi.io/freshcart-products`
    );
  }
}
