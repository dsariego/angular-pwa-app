import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/models/item.interface';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Item[] = [];
  loading = true;

  displayedColumns: string[] = ['position', 'name', 'weight'];
  
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService
    .getAllItems()
    .subscribe((items) => {
      this.items = items;
      this.loading = false;
    });
  }

}
