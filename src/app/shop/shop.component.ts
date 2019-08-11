import { Component, OnInit } from '@angular/core';
import { Data, Item } from '../shop';
import { ShopService } from '../shop.service';

class Stats {
  cost: number;
  health: number;
  armor: number;
  attack: number;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  data: Data;

  curHelm: Item;
  curGloves: Item;
  curChest: Item;
  curBoots: Item;
  curSword: Item;

  stats: Stats;

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.stats = {
      cost: 0,
      health: 0,
      armor: 0,
      attack: 0
    };
    this.shopService.getData().subscribe(data => {
      this.data = data;
      this.recalcStats();
    });
  }

  recalcStats(): void {
    this.stats.cost = 0;
    this.stats.health = this.data.person.health;
    this.stats.armor = this.data.person.armor;
    this.stats.attack = this.data.person.attack;
    
    if (this.curHelm) {
      this.stats.cost += this.curHelm.price;
      this.stats.health += this.curHelm.health;
      this.stats.armor += this.curHelm.armor;
      this.stats.attack += this.curHelm.attack;
    }

    if (this.curGloves) {
      this.stats.cost += this.curGloves.price;
      this.stats.health += this.curGloves.health;
      this.stats.armor += this.curGloves.armor;
      this.stats.attack += this.curGloves.attack;
    }

    if (this.curChest) {
      this.stats.cost += this.curChest.price;
      this.stats.health += this.curChest.health;
      this.stats.armor += this.curChest.armor;
      this.stats.attack += this.curChest.attack;
    }

    // debugger;

    if (this.curBoots) {
      this.stats.cost += this.curBoots.price;
      this.stats.health += this.curBoots.health;
      this.stats.armor += this.curBoots.armor;
      this.stats.attack += this.curBoots.attack;
    }

    if (this.curSword) {
      this.stats.cost += this.curSword.price;
      this.stats.health += this.curSword.health;
      this.stats.armor += this.curSword.armor;
      this.stats.attack += this.curSword.attack;
    }
  }

}
