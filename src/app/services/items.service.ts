import { Injectable } from '@angular/core';
import { Item } from '../models/item.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>('https://thronesapi.com/api/v2/Characters');
  }

  getItemById(id: String | null): Observable<Item> {
    return this.http.get<Item>('https://thronesapi.com/api/v2/Characters/' + id);
  }
}
