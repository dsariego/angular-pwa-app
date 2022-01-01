import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.interface';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  item!: Item;
  panelOpenState = false;

  constructor(
    private itemsService: ItemsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);

    this.itemsService.getItemById(identifier).subscribe((item) => {
      if(!item) {
        return this.router.navigateByUrl('/');
      }
      this.item = item;
      console.log('Image --> ', this.item);
      return this.item;
    })
  }

}
