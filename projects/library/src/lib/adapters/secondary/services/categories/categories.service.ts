import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../../../../application/ports/secondary/dto/category.dto';
import { CategoriesDtoPort } from '../../../../application/ports/secondary/dto/categories.dto-port';

@Injectable()
export class CategoriesService implements CategoriesDtoPort {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<CategoryDTO[]> {
    return this._httpClient.get<CategoryDTO[]>(
      `https://6384fca14ce192ac60696c4b.mockapi.io/freshcart-categories`
    );
  }

  getOne(id: string): Observable<CategoryDTO> {
    return this._httpClient.get<CategoryDTO>(
      `https://6384fca14ce192ac60696c4b.mockapi.io/freshcart-categories/${id}`
    );
  }
}
